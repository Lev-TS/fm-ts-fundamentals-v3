// optional properties
	function printCar(car: {
		make: string;
		model: string;
		chargeVoltage?: number; // this is an optional property (can be undeclared on the object)
		year: number | undefined; // this is not an optional property (can't be undeclared)

	}) {
		let str = `${car.make} ${car.model} (${car.year})`;

		if (typeof car.chargeVoltage === 'number') {
			str += `// ${car.chargeVoltage.toFixed(2)}v`;
		}

		// if we use chargeVoltage without conditional, ts will complain
		str += `// ${car.chargeVoltage.toFixed(2)}v`;

		console.log(str);
	}

	// if we miss one property, ts will complain (year is not an optional property)
	printCar({ make: 'Toyota', model: 'RAV4' });

	// if we don't use optional property, ts won't complain
	printCar({ make: 'Toyota', model: 'RAV4', year: 2017 });
	printCar({ make: 'Toyota', model: 'RAV4', year: 2017, chargeVoltage: 34 });

	
	// non-existant properties

		// if we add pass an unonimouse object that has non-existat property, ts will complain
			printCar({
				make: 'Toyota',
				model: 'RAV4',
				year: 2017,
				chargeVoltage: 34,
				gearBox: 'manual', // this didn't exist in the types we declared
			});

		//

		// but if we pass a named object that contains none-existent properties, ts won't complain.
		// the idea is that in previouse case the object is used only inside of the function, and 
		// while that property is not needed so no need to incude it. Whereas, in this case declared
		// object might be used elseware so it is justified to have an extra property.
			const myCar = {
				make: 'Toyota',
				model: 'RAV4',
				year: 2017,
				chargeVoltage: 34,
				gearBox: 'manual',
			};

			printCar(myCar)

		//

	//

//