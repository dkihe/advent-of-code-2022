// https://adventofcode.com/2022/day/6
// --- Day 6: Tuning Trouble ---

// Require File System Module
let fs = require('fs')
// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString()
// Answers for problem
let ans1, ans2

// Search for duplicates in string
let hasDuplicates = arr => {
    for (let i = 0; i < arr.length; i++) {
        let range = arr.slice(i+1)
        if (range.indexOf(arr[i]) >= 0) {
            return true
        }
    }
    return false
}

// Subroutine to find start-of-packet marker
let findMarker = (arr, len) => {
    let start, end
    for (end = len - 1; end <= arr.length-2; end++) {
        start = end - (len -1)
        let chunk = arr.slice(start, end+1)
        let dup = hasDuplicates(chunk)
        if (!dup) {
            return end + 1
        }
    }
}

// Output (Part 1): 1235
ans1 = findMarker(inputArr, 4)
console.log(ans1)

// Output (Part 2): 3051
ans1 = findMarker(inputArr, 14)
console.log(ans2)
