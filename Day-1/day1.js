// --- Day 1: Calorie Counting ---
// https://adventofcode.com/2022/day/1

// Answers for problem
let ans1, ans2

// Array used to hold total calories
const elfCalories = []

// Require File System Module
let fs = require('fs')
// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString().split("\n")

// Add calories and push each total amount to elfCalories array
let addCalories = arr => {
    let total = 0 
    for (i in arr) {
        if (arr[i] !== "") {
            total = total + parseInt(arr[i]) 
        }
        else {
            elfCalories.push(total)
            total = 0
        }
    }
}

// Fill elfCalories Array
addCalories(inputArr)

// Output (Part 1): 68467
ans1 = Math.max(...elfCalories)

// Sort Array by Descending order
const sortedArr = elfCalories.sort((a,b) => b - a)

// Top 3 elves
const topElves = []
topElves.push(sortedArr[0])
topElves.push(sortedArr[1])
topElves.push(sortedArr[2])

// Output (Part 2): 203420
ans2 = topElves.reduce((a, b) => a + b)