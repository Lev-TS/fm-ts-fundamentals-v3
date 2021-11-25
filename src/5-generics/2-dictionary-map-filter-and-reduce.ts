// SAMPLE DATA FOR YOUR
const fruits = {
	apple: { color: 'red', mass: 100 },
	grape: { color: 'red', mass: 5 },
	banana: { color: 'yellow', mass: 183 },
	lemon: { color: 'yellow', mass: 80 },
	pear: { color: 'green', mass: 178 },
	orange: { color: 'orange', mass: 262 },
	raspberry: { color: 'red', mass: 4 },
	cherry: { color: 'red', mass: 5 },
};

interface Dict<T> {
	[k: string]: T;
}

// writing generic higher order functions for similar methods as array filter, map, and reduce 
// will look like this:

// Array.prototype.map, but for Dict
function mapDict<T, U>(
	input: Dict<T>,
	mappingCb: (arg: T, key: string) => U
): Dict<U> {
	const output: Dict<U> = {};

	for (let key in input) {
		const thisVal = input[key];
		output[key] = mappingCb(thisVal, key);
	}

	return output;
}

// Array.prototype.filter, but for Dict
function filterDict<T>(input: Dict<T>, filterCb: (arg: T) => boolean): Dict<T> {
	const output: Dict<T> = {};

	for (let key in input) {
		const thisVal = input[key];

		if (filterCb(thisVal)) {
			output[key] = thisVal;
		}
	}

	return output;
}

// Array.prototype.reduce, but for Dict
function reduceDict<T, V>(
	input: Dict<T>,
	reducer: (currentValue: V, item: T) => V,
	initialValue: V
): V {
	let output = initialValue;

	for (let key in input) {
		const thisVal = input[key];
		output = reducer(output, thisVal);
	}

	return output;
}

// Call the higher order functions defined above

mapDict(fruits, (fruit, name) => ({
	...fruit,
	kg: 0.001 * fruit.mass,
	name,
}));

filterDict(fruits, (fruit) => fruit.color === 'red');

reduceDict(fruits, (currentMass, fruit) => currentMass + fruit.mass, 0);