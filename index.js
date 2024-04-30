import uniqueRandomArray from 'unique-random-array';
import {flatZip} from 'flat-zip';
import femaleDogNames from './female-dog-names.json' with {type: 'json'};
import maleDogNames from './male-dog-names.json' with {type: 'json'};

export const dogNames = flatZip([femaleDogNames, maleDogNames]);
export {femaleDogNames, maleDogNames};
export const randomDogName = uniqueRandomArray(dogNames);
export const randomFemaleDogName = uniqueRandomArray(femaleDogNames);
export const randomMaleDogName = uniqueRandomArray(maleDogNames);
