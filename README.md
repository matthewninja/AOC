# AOC
Advent of code 2019 project

## Transpiling with PharoJS

### Export from playground
`AdventOfCode exportApp.`

Run in node:
```
$ node
> require('./index')
> AdventOfCode.pj_fuelRequirement_(100756)
```

### With a bridge
First, export WebApp with PharoJs playground. Then, make a new bridge and export the AdventOfCode class:
```
bridge := PjBridge startOn: 1020 title: 'ninja'.
bridge evalBlock: [
  |aoc|
  aoc:=AdventOfCode.
  aoc.
].
bridge stop.
```
Append the new code to `index.js`.

### Use the javascript version
Copy the transpiled code into a javascript interpreter (chrome console works fine).

### Example usage in JS interpreter
`AdventOfCode.pj_fuelRequirement_(100756)`