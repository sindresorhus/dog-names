import test from 'ava';
import {
	dogNames,
	femaleDogNames,
	maleDogNames,
	randomDogName,
	randomFemaleDogName,
	randomMaleDogName,
} from './index.js';

test('main', t => {
	t.true(dogNames.length > 0);
	t.true(femaleDogNames.length > 0);
	t.true(maleDogNames.length > 0);
	t.truthy(randomDogName());
	t.truthy(randomFemaleDogName());
	t.truthy(randomMaleDogName());
	t.not(randomDogName(), randomDogName());
	t.is(dogNames[0], 'Bella');
	t.is(dogNames[1], 'Max');
});
