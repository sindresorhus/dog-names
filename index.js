'use strict';
const uniqueRandomArray = require('unique-random-array');
const {flatZip} = require('flat-zip');
const femaleDogNames = require('./female-dog-names.json');
const maleDogNames = require('./male-dog-names.json');

const allDogNames = flatZip([femaleDogNames, maleDogNames]);

exports.female = femaleDogNames;
exports.male = maleDogNames;
exports.all = allDogNames;

exports.femaleRandom = uniqueRandomArray(femaleDogNames);
exports.maleRandom = uniqueRandomArray(maleDogNames);
exports.allRandom = uniqueRandomArray(allDogNames);
