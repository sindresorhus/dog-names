/**
Top 200 dog names sorted by popularity.

@example
```
import {dogNames} from 'dog-names';

dogNames;
//=> ['Bella', 'Max', …]
```
*/
export const dogNames: readonly string[];

/**
Top 100 female dog names sorted by popularity.

@example
```
import {femaleDogNames} from 'dog-names';

femaleDogNames;
//=> ['Bella', 'Lucy', …]
```
*/
export const femaleDogNames: readonly string[];

/**
Top 100 male dog names sorted by popularity.

@example
```
import {maleDogNames} from 'dog-names';

maleDogNames;
//=> ['Max', 'Buddy', …]
```
*/
export const maleDogNames: readonly string[];

/**
Get a random dog name.

@example
```
import {randomDogName} from 'dog-names';

randomDogName();
//=> 'Coco'
```
*/
export function randomDogName(): string;


/**
Get a random female dog name.

@example
```
import {randomFemaleDogName} from 'dog-names';

randomFemaleDogName();
//=> 'Lucy'
```
*/
export function randomFemaleDogName(): string;

/**
Get a random male dog name.

@example
```
import {randomMaleDogName} from 'dog-names';

randomMaleDogName();
//=> 'Toby'
```
*/
export function randomMaleDogName(): string;
