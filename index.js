'use strict';
var uniqueRandomArray = require('unique-random-array');
var femaleDogNames = require('./female-dog-names.json');
var maleDogNames = require('./male-dog-names.json');

var allDogNames = [];

femaleDogNames.forEach(function (el, i) {
	allDogNames.push(el, maleDogNames[i]);
});

exports.female = femaleDogNames;
exports.male = maleDogNames;
exports.all = allDogNames;

exports.femaleRandom = uniqueRandomArray(femaleDogNames);
exports.maleRandom = uniqueRandomArray(maleDogNames);
exports.allRandom = uniqueRandomArray(allDogNames);
