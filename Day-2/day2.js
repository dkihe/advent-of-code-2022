// --- Day 2: Rock Paper Scissors ---
// https://adventofcode.com/2022/day/2

// Results array
let ans1, ans2

// Possible RPS choices
let rps = {
    "AX": 4,
    "AY": 8,
    "AZ": 3,
    "BX": 1,
    "BY": 5,
    "BZ": 9,
    "CX": 7,
    "CY": 2,
    "CZ": 6,
}

// Require File System Module
let fs = require('fs')

// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString().split('\n')

// Format array to remove spaces
inputArr = inputArr.map(x => x.replace(/\s/g, ''))

// Use dictionary to replace values
let total = inputArr.map(x => rps[x])

// Add all numbers, remove undef at end of array
// Output (Part 1): 11841
ans1 = total.filter(el => el !== undefined).reduce((acc, val) => acc + val, 0)

// Part 2
// Replace player's hand according to guide 
let replaceResults = inputArr.map( x => {
    // Lose
    if (x[1] == 'X') {
        if (x[0] == 'A') return x.replace(x[1], 'Z')
        if (x[0] == 'B') return x.replace(x[1], 'X')
        if (x[0] == 'C') return x.replace(x[1], 'Y')
    }
    // Draw
    if (x[1] == 'Y') {
        if (x[0] == 'A') return x.replace(x[1], 'X')
        if (x[0] == 'B') return x.replace(x[1], 'Y')
        if (x[0] == 'C') return x.replace(x[1], 'Z')
    }
    // Win
    if (x[1] == 'Z') {
        if (x[0] == 'A') return x.replace(x[1], 'Y')
        if (x[0] == 'B') return x.replace(x[1], 'Z')
        if (x[0] == 'C') return x.replace(x[1], 'X')
    }
})

// Use dictionary to replace values
let total2 = replaceResults.map(x => rps[x])

// Add all numbers, remove undef at end of array
// Output (Part 2): 13022
ans2 = total2.filter(el => el !== undefined).reduce((acc, val) => acc + val, 0)