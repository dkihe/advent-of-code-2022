// https://adventofcode.com/2022/day/8
// --- Day 8: Treetop Tree House ---

// Require File System Module 
let fs = require('fs')
// Array containing input.txt
let data = fs.readFileSync('./test.txt').toString().trim().split('\n')

let total = 0
let grid = []

// Create a 2d array
data.map(x => grid.push(x))
grid = grid.map(x => x.trim())

for (let col = 0; col <= grid[0].length; col++) {
    for (let row = 0; row <= grid.length; row++) {
        if ((col == 0) || (col == grid[0].length - 1) || (row == 0) || (row == grid.length - 1)) {
            total++
        }
    }
}

let checkVisible = (row, col) => {
    let tree = grid[row][col]
    // Check left and right
    let left = grid[row].slice(0,col)
    let right = grid[row].slice(col+1, grid[row].length)
    let up = grid[col].slice(0,row)
    let down = grid[col].slice(row+1, grid[col].length)
    console.log(Math.max(...up))
    // if (tree > Math.max(...left) || tree > Math.max(...right) || tree > Math.max(...up) || tree > Math.max(...down)) {
    //     console.log(true)
    //     total++
    // }
}

console.log(grid[0].slice(0,3))
// checkVisible(3,3)