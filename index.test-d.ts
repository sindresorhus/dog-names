import {expectType} from 'tsd';
import dogNames = require('.');

expectType<readonly string[]>(dogNames.female);
expectType<readonly string[]>(dogNames.male);
expectType<readonly string[]>(dogNames.all);
expectType<string>(dogNames.femaleRandom());
expectType<string>(dogNames.maleRandom());
expectType<string>(dogNames.allRandom());
