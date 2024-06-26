#!/usr/bin/env node
import meow from 'meow';
import dogNames from './index.js';

const cli = meow(`
	Usage:
	  $ dog-names

	Options
	  --all   Get all the names instead of a random name
	  --type  Type of name  [Default: all]  [Values: female, male, all]

	Examples
	  $ dog-names
	  Lucy
	  $ dog-names --all --type male
	  Max
	  Buddy
	  …
`, {
	importMeta: import.meta,
	flags: {
		all: {
			type: 'boolean',
			default: false
		},
		type: {
			type: 'string',
			default: 'all'
		}
	}
});

const {all, type} = cli.flags;

if (!['female', 'male', 'all'].includes(type)) {
	throw new Error(`Invalid type provided: '${type}'. Valid types are: 'female', 'male', 'all'.`);
}

console.log(all ? dogNames[type].join('\n') : dogNames[type + 'Random']());
