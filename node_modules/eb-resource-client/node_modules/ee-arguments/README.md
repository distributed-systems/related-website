# ee-arguments

parses the arguments array passed to a function by variable type and their position in the array, returns the requested type & position

## installation

	npm install ee-arguments


## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-argv.png?branch=master)](https://travis-ci.org/eventEmitter/ee-arguments)


## API

### Constructor

Creates an instance of the Arguments class bound to the current arguments object.

	var Arguments = require('ee-arguments');

	var myFunction(){
		var args = new Arguments(arguments);
	};

	myFunction();

### get

Get the first occurence of a specific type from the arguments object, return an optional defined default if the type is not found.


	var myFunction(){
		var args = new Arguments(arguments);

        args.get('string', 'defaultValue'); // do not use strings this way!
        args.get('boolean', true); // true
	};

	myFunction(1, new String('do not use strings this way!'), 'second string');




### getByIndex

Returns the item of the defined type and the defined index from the arguments object. return an optional defined default if the type is not found.


	var myFunction(){
		var args = new Arguments(arguments);

        args.getByIndex('string', 1, function default(){}); // second string
        args.getByIndex('string', 5); // undefined
	};

	myFunction(1, new String('do not use strings this way!'), 'second string');


### Type specif methods

For the types defined below there are specific methods available

- string
- number
- boolean
- array
- object
- function
- date
- regexp
- error
- undefined
- buffer
- null


	var myFunction(){
		var args = new Arguments(arguments);

        args.getString(); // do not use strings this way!
        args.getNumberByIndex(1, 'defaultValue'); // second string
	};

	myFunction(1, new String('do not use strings this way!'), 'second string');



## Verions History

- 1.0.0: complete rewrite, made it easier to user, made it faster. Chnaged the API
- 1.0.1: Added travis.yml