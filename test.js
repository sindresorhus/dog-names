import test from 'ava';
import m from './';

test(t => {
	t.true(m.female.length > 0);
	t.true(m.male.length > 0);
	t.true(m.all.length > 0);
	t.ok(m.femaleRandom());
	t.ok(m.maleRandom());
	t.ok(m.allRandom());
	t.not(m.allRandom(), m.allRandom());
	t.is(m.all[0], 'Bella');
	t.is(m.all[1], 'Max');
});
