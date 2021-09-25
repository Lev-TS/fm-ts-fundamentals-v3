const car: {
	make: string;
	model: string;
	year: number;
} = {
	make: 'Toyota',
	model: 'Corolla',
	year: 2002,
};

// when we have parameter values declared in the function we get a
// helpful intelisense
function printCar(car: { make: string; model: string; year: number }) {
	console.log(`${car.make} ${car.model} (${car.year})`);
}
