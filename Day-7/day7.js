// https://adventofcode.com/2022/day/7
// --- Day 7: No Space Left On Device ---

// Require File System Module 
const { dir } = require('console')
let fs = require('fs')
const { get } = require('http')
const { parse } = require('path')
// Array containing input.txt
let data = fs.readFileSync('./input.txt').toString().split("\n")
// Answers for problem
let ans1, ans2

// Test data
let testData = fs.readFileSync('./test.txt').toString().split("\n")
// Hold path
let path = []

data = data.map(x => x)

let directories = {
    root: 0,
}

// console.log(directories)
for (const line of testData) {
    let l = line.split(' ')

    if (l[0] == '$') {
        if (l[1] == 'cd') {
            if (l[2] == '..') {
                path.pop()
            }
            else {
                if (directories[ l[2] ] == undefined) {
                    directories[ l[2] ] = 0
                }
                path.push(l[2])
            }
        }
    }
    else if (!isNaN(l[0])) {
        for (const d of path) {
            directories[d] += parseInt(l[0])
        }
    }
}

// let test = data[12].split(' ')
// console.log(test[0])
// console.log(!isNaN(1))

console.log(path)
console.log(directories)