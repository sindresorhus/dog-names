'use strict';
var uniqueRandom = require('unique-random');
var femaleDogNames = require('./female-dog-names.json');
var maleDogNames = require('./male-dog-names.json');

var allDogNames = [];

femaleDogNames.forEach(function (el, i) {
	allDogNames.push(el, maleDogNames[i]);
});

var femaleRandom = uniqueRandom(0, femaleDogNames.length - 1);
var maleRandom = uniqueRandom(0, femaleDogNames.length - 1);
var allRandom = uniqueRandom(0, allDogNames.length - 1);

exports.female = femaleDogNames;
exports.male = maleDogNames;
exports.all = allDogNames;

exports.femaleRandom = function () {
	return femaleDogNames[femaleRandom()];
};

exports.maleRandom = function () {
	return maleDogNames[maleRandom()];
};

exports.allRandom = function () {
	return allDogNames[allRandom()];
};
