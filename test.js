import test from 'ava';
import fn from '.';

test('install', t => {
	t.is(fn(), 'unicorns & rainbows');
});
