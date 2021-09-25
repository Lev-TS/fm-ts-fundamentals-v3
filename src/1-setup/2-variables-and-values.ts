let age = 6; // type = number
age = 'hi'; // error = assign string to number

const time = 6; // type = 6 (literal type)

// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date; // type is assygned to date, if no type than type would be any

setTimeout(() => {
	endTime = 0; // errors when we assign a number
	endTime = new Date();
}, RANDOM_WAIT_TIME);
