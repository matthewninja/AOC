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

{ #category : #'pharojs globals' }
ExpressPolyfill class >> nodePackageName [
	<pharoJsSkip>
	^ 'express'
]

{ #category : #polyfill }
ExpressPolyfill class >> nodePolyfill: aStream [
	<pharoJsSkip>
	super nodePolyfill: aStream.
]
