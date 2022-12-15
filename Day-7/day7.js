// https://adventofcode.com/2022/day/7
// --- Day 7: No Space Left On Device ---

// Require File System Module 
let fs = require('fs')
// Array containing input.txt
let data = fs.readFileSync('./test.txt').toString().split('\n')

// Remove newline and carriage return from string
data = data.map(x => x.trim())
data = data.map(x => x.split(' '))

// CWD: Current Working Directory
let cwd = root = {}

let stack = []

for (l of data) {
    if (l[0] == '$') {
        if (l[1] == 'cd') {
            if (l[2] == '/') {
                cwd = root
                stack = []
            }
            else if (l[2] == '..') {
                cwd = stack.pop()
            }
            // If l[2] is a directory name
            else {
                // Check if cwd contains this dir as a key
                if (!cwd.hasOwnProperty(l[2])) {
                    cwd[l[2]] = {}
                }
                // Push cwd to the stack
                stack.push(cwd)
                // cwd is now the new dir
                cwd = cwd[l[2]]
            }
        }
    }
    else {
        if (l[0] == 'dir') {
            if (!cwd.hasOwnProperty(l[1])) {
                cwd[l[1]] = {}
            }
        }
        else {
            cwd[l[1]] = parseInt(l[0])
        }
    }
}

let size = 0
let ans = 0

let solve = dir => {
    if (typeof dir == 'number') {
        return (dir, 0)
    }
    size = 0
    ans = 0
    for (child of Object.values(dir)) {
        console.log("RECURSE: " + child)
        let s, a
        s = a = solve(child)
        size += s        
        ans += a
        console.log("AFTER RECURSION ----------> S: " + s + "    A: " + a)
    }
    if (size <=100000) {
        ans += size
        console.log("CHECHING SIZE ----------> SIZE: " + size + "    ANS: " + ans)
    }
    return (size, ans)
}

// let solve = arr => {
//     for (let key in arr) {
//         console.log()
//     }
// }

console.log(solve(root))

// solve(root)
// console.log(root)

// for (child of Object.values(root)) {
//     console.log(child)
// }

// console.log(Object.values(root))
