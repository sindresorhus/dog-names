# dog-names [![Build Status](https://travis-ci.org/sindresorhus/dog-names.svg?branch=master)](https://travis-ci.org/sindresorhus/dog-names)

> Get popular dog names

![](kira.jpg)

The name lists are just JSON files and can be used wherever.

*Not accepting PRs for additional names.*


## Install

```
$ npm install --save dog-names
```


## Usage

```js
var dogNames = require('dog-names');

dogNames.femaleRandom();
//=> Lucy
```


## API

### .female

Type: `array`

Top 100 female dog names sorted by popularity.

### .male

Type: `array`

Top 100 male dog names sorted by popularity.

### .all

Type: `array`

Top 200 dog names sorted by popularity.

### .femaleRandom()

Type: `function`

Random female dog name.

### .maleRandom()

Type: `function`

Random male dog name.

### .allRandom()

Type: `function`

Random dog name.


## CLI

```
$ npm install --global dog-names
```

```
$ dog-names --help

  Examples
    $ dog-names
    Lucy

    $ dog-names --all --type male
    Max
    Buddy
    ...

  Options
    --all   Get all names instead of a random name
    --type  Type of name: female|male|all  Default: all
```


## Related

- [`cat-names`](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [`superb`](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
