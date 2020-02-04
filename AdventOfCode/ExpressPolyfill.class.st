"
An Express server
"
Class {
	#name : #ExpressPolyfill,
	#superclass : #PjJavascriptGlobals,
	#classVars : [
		'ExpressServer'
	],
	#category : #AdventOfCode
}

{ #category : #'as yet unclassified' }
ExpressPolyfill class >> createTransport: options [
]

{ #category : #'pharojs globals' }
ExpressPolyfill class >> nodePackageName [
	<pharoJsSkip>
	^ 'express'
]
