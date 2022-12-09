// --- Day 4: Camp Cleanup ---
// https://adventofcode.com/2022/day/4

// Require File System Module
let fs = require('fs')
// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString().split("\n")
// Answers for problem
let ans1, ans2

// Combine data into single array
let combineData = arr => arr.split(',').map( x => x.split('-')).flat()
// Combine data in inputArr
inputArr = inputArr.map(x => combineData(x))
// Check if storage items overlap
let isOverlapping = pair => {
    // Change strings to int
    pair = pair.map(x => parseInt(x))

    if ((pair[0] <= pair[2] && pair[1] >= pair[3]) || (pair[0] >= pair[2] && pair[1] <= pair[3])) {
        return + true
    }
    else {
        return + false
    }
}

// Search for all overlapping items in storage and sum them up
let searchStorage = arr => arr.map( x => isOverlapping(x)).reduce((a,b) => a+ b)

// Output (Part 1): 651
ans1 = searchStorage(inputArr)
// Part 2

// Get all overlapping storage
getAllOverlap = pair => {
    let result = 0
    pair.map( (x) => {
        let parsed = x.map(i => parseInt(i))
        if (!(parsed[1] < parsed[2]) && !(parsed[3] < parsed[0])) {
            result++
        }
    })

    return result - 1
}

// Output (Part 2): 956
ans2 = getAllOverlap(inputArr)
