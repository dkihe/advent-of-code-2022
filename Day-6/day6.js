// https://adventofcode.com/2022/day/6
// --- Day 6: Tuning Trouble ---

// Require File System Module
let fs = require('fs')
const { parse } = require('path')
// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString()
// Answers for problem
let ans1, ans2

// Search for duplicates in string
let hasDuplicates = arr => {
    for (let i = 0; i < arr.length; i++) {
        let range = arr.slice(i+1)
        // console.log(range)
        // console.log(arr[i])
        if (range.indexOf(arr[i]) >= 0) {
            return true
        }
    }
    return false
}

// Subroutine to find start-of-packet marker
let findMarker = arr => {
    let start, end
    for (end = 3; end <= arr.length-2; end++) {
        start = end - 3
        let test = arr.slice(start, end+1)
        let dup = hasDuplicates(test)
        if (!dup) {
            return end + 1
        }
    }
}

// Output (Part 1): 1235
ans1 = findMarker(inputArr)
console.log(ans1)
