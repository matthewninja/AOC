"
""Advent Of Code 2019""
"
Class {
	#name : #AdventOfCode,
	#superclass : #Object,
	#category : #AdventOfCode
}

{ #category : #tools }
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

{ #category : #tools }
AdventOfCode class >> findNounVerb: originalProgram [
	"finds the noun and verb"
	| output program |
	0 to: 99 do: [ :a | 
		0 to: 99 do: [  :b |
		program := originalProgram copy.
		program at: 2 put: a.
		program at: 3 put: b. " temp. will put b"
		output := (self intcodeOriginal: program) at: 1.
		(output == 19690720) ifTrue: [ 
			^ b.
			 ].
		"Transcript show: output printString; cr"
		 ].].
	^ -1.
]

{ #category : #tools }
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

{ #category : #tools }
AdventOfCode class >> fuelRequirement: mass [
	^ mass // 3 - 2.
]

{ #category : #tools }
AdventOfCode class >> fuelRequirementTotal2: masses [
	"Day 1 part 2"
	| total |
	total := 0.
	masses do: [ :i | 
		total := total + (self fuelRequirement2: i).
	].
	^ total.
]

{ #category : #tools }
AdventOfCode class >> fuelRequirementTotal: masses [
	"Day 1: fuel requirement with multiple inputs"
	| total |
	total := 0.
	masses do: [ :i | 
		total := total + (self fuelRequirement: i).
	].
	^ total.
]

{ #category : #intcode }
AdventOfCode class >> intcode1: program index: index instruction: instruction [
	"deal with intcode 1 (addition)"
	
	| x y z |

	x := self intcodeParams: instruction arg: 1 program: program index: index.
	y := self intcodeParams: instruction arg: 2 program: program index: index.
	z := x + y.
	program at: (program at: index + 3) + 1 put: z.
	^ 4.
]

{ #category : #intcode }
AdventOfCode class >> intcode2: program index: index instruction: instruction [
	"deal with intcode 1 (addition)"
	
	| x y z |

	x := self intcodeParams: instruction arg: 1 program: program index: index.
	y := self intcodeParams: instruction arg: 2 program: program index: index.
	z := x * y.
	program at: (program at: index + 3) + 1 put: z.
	^ 4.
]

{ #category : #intcode }
AdventOfCode class >> intcode3: program index: index input: input [

	program at: (program at: index + 1) + 1 put: input.
	^ 2.
]

{ #category : #intcode }
AdventOfCode class >> intcode4: program index: index [
	Transcript show: (program at: (program at: index + 1) + 1);cr.
	^ 2.
]

{ #category : #intcode }
AdventOfCode class >> intcode5: program index: index instruction: instruction [
	"Opcode 5 is jump-if-true: if the first parameter is non-zero, 
	it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing."
		
	| x y |
	
	x := self intcodeParams: instruction arg: 1 program: program index: index.
	
	x ~= 0 ifTrue: [
		y := program at: index + 2.
		^ (y - index + 1)
		].
	^ 3.
]

{ #category : #intcode }
AdventOfCode class >> intcode6: program index: index instruction: instruction [
	"Opcode 5 is jump-if-true: if the first parameter is non-zero, 
	it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing."
		
	| x y |
	
	x := self intcodeParams: instruction arg: 1 program: program index: index.
	
	x = 0 ifTrue: [
		y := program at: index + 2.
		^ (y - index + 1)
		].
	^ 3.
]

{ #category : #intcode }
AdventOfCode class >> intcode7: program index: index instruction: instruction [

]

{ #category : #intcode }
AdventOfCode class >> intcodeMachine: program input: input [
	"runs the intcode program"

	| programLen index increment instruction opcode |
	programLen := program size.
	index := 1.
	increment := 4.
	[ index <= programLen ]
		whileTrue: [
			instruction := program at: index.
			opcode := (instruction digitAt: 1 base: 10) + (10 * (instruction digitAt: 2 base: 10)).
			Transcript show: 'opcode:'; show: opcode; cr.
			opcode = 99
				ifTrue: [ programLen :=  -1 ]
				ifFalse: [ increment := 4 ].
			opcode = 1
				ifTrue: [increment :=self intcode1: program index: index instruction: instruction].
			opcode = 2
				ifTrue: [increment := self intcode2: program index: index instruction: instruction].
			opcode = 3
				ifTrue: [increment := self intcode3: program index: index input: input].
			opcode = 4
				ifTrue: [increment := self intcode4: program index: index].
			opcode = 5
				ifTrue: [increment := self intcode5: program index: index instruction: instruction].
			opcode = 6
				ifTrue: [increment := self intcode6: program index: index instruction: instruction].
			index := index + increment ].
	^ program
]

{ #category : #intcode }
AdventOfCode class >> intcodeOriginal: program [
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

{ #category : #intcode }
AdventOfCode class >> intcodeParams: instruction arg: arg program: program index: index [
	"returns value for intcode instructions"
	
	(instruction digitAt: 2 + arg base: 10) = 1
						ifTrue: [ ^ (program at: index + arg ).]
						ifFalse: [ ^ (program at: (program at: index + arg) + 1 )].

	
]

{ #category : #tools }
AdventOfCode class >> passwordCount2: a end: b [
	"Day 4: return viable password within range a-b inclusive"
	| total |
	total := 0.
	a to: b do: [ :i |
		(self validPassword2: i) ifTrue: [ 
			total := total + 1.
			].	
	].
	^ total.
]

{ #category : #tools }
AdventOfCode class >> passwordCount: a end: b [
	"Day 4: return viable password within range a-b inclusive"
	| total |
	total := 0.
	a to: b do: [ :i |
		(self validPassword: i) ifTrue: [ 
			total := total + 1.
			].	
	].
	^ total.
]

{ #category : #tools }
AdventOfCode class >> validPassword2: password [
	| priorDigit hasAdjacent adjacencyCounter |
	"Valid passwords meet the following criteria:"
	"It is a six-digit number."
	(password decimalDigitLength ~= 6) ifTrue: [ ^ false ].
	"The value is within the range given in your puzzle input. This can be taken for granted in this context"
	"(at least) Two adjacent digits are the same (like 22 in 122345)."
	hasAdjacent := false.
	adjacencyCounter := 0.
	"Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)."
	"Or: going right to left, digits never increase."
	priorDigit := password digitAt: 1 base: 10.
	2 to: 6 do: [ :i |
		((password digitAt: i base: 10) > priorDigit) ifTrue: [ ^ false ]. "check that digits increase left to right"
		
		((password digitAt: i base: 10) = priorDigit) ifTrue: [ 
			adjacencyCounter := adjacencyCounter + 1.
		] ifFalse: [
			(adjacencyCounter = 1) ifTrue: [ hasAdjacent := true ].
			adjacencyCounter := 0.
		].
		priorDigit := password digitAt: i base: 10.
	].
	(adjacencyCounter = 1) ifTrue: [ hasAdjacent := true ].
	^ hasAdjacent.
	
	"For part 2, we're simply going to keep a counter for adjacencies. If reset to 0 while 1, hasAdjacent:= true."
	"If reset while > 2, do nothing"
	"An Elf just remembered one more important detail: the two adjacent matching digits 
	are not part of a larger group of matching digits.

	Given this additional criterion, but still ignoring the range rule, the following are now true:

	112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
	123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
	111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22)."
]

{ #category : #tools }
AdventOfCode class >> validPassword: password [
	| priorDigit hasAdjacent |
	"Valid passwords meet the following criteria:"
	"It is a six-digit number."
	(password decimalDigitLength ~= 6) ifTrue: [ ^ false ].
	"The value is within the range given in your puzzle input. This can be taken for granted in this context"
	"(at least) Two adjacent digits are the same (like 22 in 122345)."
	hasAdjacent := false.
	"Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)."
	"Or: going right to left, digits never increase."
	priorDigit := password digitAt: 1 base: 10.
	2 to: 6 do: [ :i |
		((password digitAt: i base: 10) > priorDigit) ifTrue: [ ^ false ].
		((password digitAt: i base: 10) = priorDigit) ifTrue: [ hasAdjacent := true ].
		priorDigit := password digitAt: i base: 10.
	].
	^ hasAdjacent.
]
