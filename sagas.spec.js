import test from 'tape'

console.log(test)

import { incrementAsync } from './sagas'

test('incrementAsync saga test', (assert) => {
	const gen = incrementAsync()
	console.log(gen.next())
})