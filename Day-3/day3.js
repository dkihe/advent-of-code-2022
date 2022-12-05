// --- Day 3: Rucksack Reorganization ---
// https://adventofcode.com/2022/day/3

// Require File System Module
let fs = require('fs')
// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString().split("\n")

// Answers for problem
let ans1, ans2

// Item priority list
const priorityList= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

// All item types from each sack that take priority
let sackPriority = []

// Split list in half
let splitArr = list => {
    const half = Math.ceil(list.length/2)

    const first = list.slice(0, half)
    const second = list.slice(half)

    return [first, second]
}

// Find duplicates in 2 lists
let findDuplicates = arr => {
    let res = []

    let first = arr[0]
    let second = arr[1]

    first.split('').map( x => {
        if (second.indexOf(x) >= 0) {
            res.push(x)
        }
    })

    return res
}

// Push all priority items to an array
let getPriorityItems = arr => {
    return arr.map( i => {
        if (i != "") {
            let res = findDuplicates(splitArr(i))
            sackPriority.push(res[0])
        }
    })
}

// Get the priority number of all items in array
let getPriorityNumber = arr => arr.map( i => priorityList.indexOf(i) + 1 )

// Get the total of all priority items 
let addPriorityNumbers = arr => arr.reduce((a,b) => a + b)

getPriorityItems(inputArr)

// Output (Part 1): 7889
ans1 = getPriorityNumber(sackPriority)


// Part 2

// Hold all priority items
let itemGroups = []
// Temporary array to hold original input array
let tempInputArr = inputArr

// Create a new group from first 3 items in array
let createGroup = arr => {
    let group = tempInputArr.splice(0,3)
    return group
}

// Find duplicates in 3 lists
let findDuplicates3 = arr => {
    let res = []

    let first = arr[0]
    let second = arr[1]
    let third = arr[2]

    first.split('').map( x => {
        if (second.indexOf(x) >= 0 && third.indexOf(x) >= 0) {
            res.push(x)
        }
    })

    return res
}

// Get all priority items from groups of 3
let getPriorityItems3 = arr => {
    while (arr.length > 0) {
        // Create a group from first 3 items in list
        let create_group = createGroup(tempInputArr)
        // Find the duplicates in the 3 groups
        let dup = findDuplicates3(create_group)
        // Push the duplicate to the items group array
        itemGroups.push(dup[0])
    }
}

// Get all priority items in list
getPriorityItems3(tempInputArr)

// Sum up the priority numbers for all items
let sum = getPriorityNumber(itemGroups)

// Output (Part 2): 2825
ans2 = addPriorityNumbers(sum)
