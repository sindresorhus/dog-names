import femaleDogNames = require('./female-dog-names.json');
import maleDogNames = require('./male-dog-names.json');

declare const dogNames: {
	/**
	Top 100 female dog names sorted by popularity.

	@example
	```
	import dogNames = require('dog-names');

	dogNames.female;
	//=> ['Bella', 'Lucy', …]
	```
	*/
	readonly female: Readonly<typeof femaleDogNames>;

	/**
	Top 100 male dog names sorted by popularity.

	@example
	```
	import dogNames = require('dog-names');

	dogNames.male;
	//=> ['Max', 'Buddy', …]
	```
	*/
	readonly male: Readonly<typeof maleDogNames>;

	/**
	Top 200 dog names sorted by popularity.

	@example
	```
	import dogNames = require('dog-names');

	dogNames.all;
	//=> ['Bella', 'Max', …]
	```
	*/
	readonly all: Readonly<typeof femaleDogNames> & Readonly<typeof maleDogNames>;

	/**
	Random female dog name.

	@example
	```
	import dogNames = require('dog-names');

	dogNames.femaleRandom();
	//=> 'Lucy'
	```
	*/
	femaleRandom(): string;

	/**
	Random male dog name.

	@example
	```
	import dogNames = require('dog-names');

	dogNames.maleRandom();
	//=> 'Toby'
	```
	*/
	maleRandom(): string;

	/**
	Random dog name.

	@example
	```
	import dogNames = require('dog-names');

	dogNames.allRandom();
	//=> 'Coco'
	```
	*/
	allRandom(): string;
};

export = dogNames;
