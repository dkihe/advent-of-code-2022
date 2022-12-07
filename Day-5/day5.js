// https://adventofcode.com/2022/day/5/input
// Require File System Module
let fs = require('fs')
const { parse } = require('path')
// Array containing input.txt
let inputArr = fs.readFileSync('./input.txt').toString().split("\n").slice(10)
// Answers for problem
let ans1, ans2

// Create arrays for each stack
// Format commands into array [#of crates, stack from, stack to]
// Loop through each command and execute

// Stacks
let stacks = {
    1: ['Z', 'J', 'G'],
    2: ['Q', 'L', 'R', 'P', 'W', 'F', 'V', 'C'],
    3: ['F','P','M','C','L','G','R'],
    4: ['L','F','B','W','P','H','M'],
    5: ['G','C','F','S','V','Q'],
    6: ['W','H','J','Z','M','Q','T','L'],
    7: ['H','F','S','B','V'],
    8: ['F','J','Z','S'],
    9: ['M','C','D','P','F','H','B','T']
}

// Copies of stack ifor different parts of problem
let stacks1 = JSON.parse(JSON.stringify(stacks))
let stacks2 = JSON.parse(JSON.stringify(stacks))

// Format commands
inputArr = inputArr.map( x => x.replace('move ', '').replace(' from ', ',').replace(' to ', ',').split(','))

// Move crate
let moveCrate = (move, from, to) => {
    for (let i = parseInt(move); i > 0; i--) {
        let top = stacks1[from].pop()
        stacks1[to].push(top)
    }
}

// Run movement function on all data
inputArr.map( x => moveCrate(...x))


// Get top of stack for each
let getTop = stack => {
    let tos = ''
    for (let key in stack) {
        tos = tos + stack[key].slice(-1)[0]
    }
    return tos
}

// Output (Part 1): WSFTMRHPP
ans1 = getTop(stacks1)

// Part 2

// Move multiple crates in a stack
let moveCrateMult = (move, from, to) => {
    let start
    if (stacks2[from] != undefined) {
        start = (stacks2[from].length - parseInt(move))
        for (let i = parseInt(move); i > 0; i--) {
            let top = stacks2[from].slice(start)
            stacks2[from].splice(start)
            stacks2[to] = stacks2[to].concat(top)
        }
    }
}

// Run movement function on all data
inputArr.map( x => moveCrateMult(...x))
// Output (Part 2): GSLCMFBRP
ans2 = getTop(stacks2)