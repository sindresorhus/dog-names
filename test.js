import test from 'ava';
import dogNames from '.';

test('main', t => {
	t.true(dogNames.female.length > 0);
	t.true(dogNames.male.length > 0);
	t.true(dogNames.all.length > 0);
	t.truthy(dogNames.femaleRandom());
	t.truthy(dogNames.maleRandom());
	t.truthy(dogNames.allRandom());
	t.not(dogNames.allRandom(), dogNames.allRandom());
	t.is(dogNames.all[0], 'Bella');
	t.is(dogNames.all[1], 'Max');
});
