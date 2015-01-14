'use strict';
var test = require('ava');
var dogNames = require('./');

test(function (t) {
	t.assert(dogNames.female.length > 0);
	t.assert(dogNames.male.length > 0);
	t.assert(dogNames.all.length > 0);
	t.assert(dogNames.femaleRandom());
	t.assert(dogNames.maleRandom());
	t.assert(dogNames.allRandom());
	t.assert(dogNames.allRandom() !== dogNames.allRandom());
	t.assert(dogNames.all[0] === 'Bella');
	t.assert(dogNames.all[1] === 'Max');
	t.end();
});
