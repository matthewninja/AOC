Class {
	#name : #AdventOfCode,
	#superclass : #Object,
	#category : #AdventOfCode
}

{ #category : #'as yet unclassified' }
AdventOfCode class >> crossedWires: patha num: pathb [
	"Need matrix big enough to accomodate both wires"
	"Alternatively, we can have a matrix that grows to accomodate the wires"
	"One approach, we can go through the input and mark each spot that it crosses with an a or b"
	"This would tell us where the wires intersect (because it would have both a and b)"
	"Then, we can iterate through the matrix and calculate manhattan distance from origin, keeping a running minimum"
	"The central port is arbitrary, so long as it's the same for both wires"
	"Central port location is not at 0,0"
	"maybe dynamic matrix stores origin"
	"We'll deal with Manhattan Distance later (or first?)"
	
	"2D Array with changing size, use Array2DDynamic"
	| matrix | 
	matrix := Array2DDynamic zeros: 2. "Start with a 2x2 matrix"
	""
	^ matrix.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> findNounVerb: originalProgram [
	"finds the noun and verb"
	| output program |
	0 to: 99 do: [ :a | 
		0 to: 99 do: [  :b |
		program := originalProgram copy.
		program at: 2 put: a.
		program at: 3 put: b. " temp. will put b"
		output := (self intcode: program) at: 1.
		(output == 19690720) ifTrue: [ 
			^ b.
			 ].
		"Transcript show: output printString; cr"
		 ].].
	^ -1.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> fuelRequirement2: mass [
	| required total |
	required := self fuelRequirement: mass.
	total := 0.
	[ required >= 0 ] whileTrue: [ 
		total := total + required.
		required := self fuelRequirement: required.
	].
	
	^ total.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> fuelRequirement: mass [
	^ mass // 3 - 2.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> fuelRequirementTotal2: masses [
	"Day 1 part 2"
	| total |
	total := 0.
	masses do: [ :i | 
		total := total + (self fuelRequirement2: i).
	].
	^ total.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> fuelRequirementTotal: masses [
	"Day 1: fuel requirement with multiple inputs"
	| total |
	total := 0.
	masses do: [ :i | 
		total := total + (self fuelRequirement: i).
	].
	^ total.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> intcode: program [
	"runs the intcode program"

	| programLen index x y |
	programLen := program size.
	index := 1.
	[ index <= programLen ] 
	whileTrue: [ 
		((program at: index) ~= 99) ifTrue: [ 
			
			 ].
		(( program at: index) == 1) ifTrue: [ 
			x := (program at: (index + 1)) + 1.
			y := (program at: (index + 2)) + 1.
			program 
			at: (program at: (index + 3)) + 1 
			put: (program at: x) + (program at: y)
			"put: 3 "].
		(( program at: index) == 2) ifTrue: [ 
			x := (program at: (index + 1)) + 1.
			y := (program at: (index + 2)) + 1.
			program 
			at: (program at: (index + 3)) + 1 
			put: (program at: x) * (program at: y)
			"put: 3 "].
		index := index + 4.
	].
	^ program.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> passwordCount: a end: b [
	"Day 4: return viable password within range a-b inclusive"
	| total |
	total := 0.
	a to: b do: [ :i |
		(self validPassword: i) ifTrue: [ 
			total := total + 1.
			^ -10. "temporary for testing."
			].	
	].
	^ a + b.
]

{ #category : #'as yet unclassified' }
AdventOfCode class >> validPassword: password [
	"Valid passwords meet the following criteria:"
	"It is a six-digit number.
	The value is within the range given in your puzzle input.
	Two adjacent digits are the same (like 22 in 122345).
	Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)."

	^ true.
]
