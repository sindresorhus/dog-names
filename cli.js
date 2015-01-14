#!/usr/bin/env node
'use strict';
var meow = require('meow');
var dogNames = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ dog-names',
		'  Lucy',
		'',
		'  $ dog-names --all --type male',
		'  Max',
		'  Buddy',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name',
		'  --type  Type of name: female|male|all  Default: all'
	].join('\n')
});

var type = cli.flags.type || 'all';
console.log(cli.flags.all ? dogNames[type].join('\n') : dogNames[type + 'Random']());
