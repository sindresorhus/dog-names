import test from 'ava';
import m from './';

test(t => {
	t.true(m.female.length > 0);
	t.true(m.male.length > 0);
	t.true(m.all.length > 0);
	t.truthy(m.femaleRandom());
	t.truthy(m.maleRandom());
	t.truthy(m.allRandom());
	t.not(m.allRandom(), m.allRandom());
	t.is(m.all[0], 'Bella');
	t.is(m.all[1], 'Max');
});
