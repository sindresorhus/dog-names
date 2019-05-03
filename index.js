'use strict';
const uniqueRandomArray = require('unique-random-array');
const femaleDogNames = require('./female-dog-names.json');
const maleDogNames = require('./male-dog-names.json');

const allDogNames = femaleDogNames.reduce(
	(allDogNames, femaleDogName, index) => {
		allDogNames.push(femaleDogName, maleDogNames[index]);
		return allDogNames;
	},
	[]
);

exports.female = femaleDogNames;
exports.male = maleDogNames;
exports.all = allDogNames;

exports.femaleRandom = uniqueRandomArray(femaleDogNames);
exports.maleRandom = uniqueRandomArray(maleDogNames);
exports.allRandom = uniqueRandomArray(allDogNames);
