# dog-names

> Get popular dog names

![](kira.jpg)

The name lists are just JSON files and can be used anywhere.

*I'm not accepting PRs for additional names.*

## Install

```sh
npm install dog-names
```

## Usage

```js
import {randomFemaleDogName} from 'dog-names';

randomFemaleDogName();
//=> 'Lucy'
```

## API

### dogNames

Type: `string[]`

Top 200 dog names sorted by popularity.

### femaleDogNames

Type: `string[]`

Top 100 female dog names sorted by popularity.

### maleDogNames

Type: `string[]`

Top 100 male dog names sorted by popularity.

### randomDogName()

Type: `Function`

Get a random dog name.

### randomFemaleDogName()

Type: `Function`

Get a random female dog name.

### randomMaleDogName()

Type: `Function`

Get a random male dog name.

## CLI

```sh
npm install --global dog-names
```

```
$ dog-names --help

  Get popular dog names

  Usage
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
```

## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words
