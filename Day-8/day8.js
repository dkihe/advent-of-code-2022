// https://adventofcode.com/2022/day/8
// --- Day 8: Treetop Tree House ---

// Require File System Module 
let fs = require('fs')
// Array containing input.txt
let data = fs.readFileSync('./input.txt').toString().trim().split('\n')

let total = 0
let grid = []

// Create a 2d array
data.map(x => grid.push(x))

for (let col = 0; col <= grid[0].length; col++) {
    for (let row = 0; row <= grid.length; row++) {
        if ((col == 0) || (col == grid[0].length - 1) || (row == 0) || (row == grid.length - 1)) {
            total++
        }
    }
}
// console.log(grid[2][18])