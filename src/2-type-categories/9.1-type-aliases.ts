// we can import type aliases that are declared and exported elseware
	import { UserContactInfo } from './9.2-type-aliases';

	function printContactInfo(info: UserContactInfo) {
		console.log(info.name);
		console.log(info.email);
		console.log(info.address); // ERROR: check another file, address type is not defined
	}

	const painter = {
		name: 'Levan',
		email: 'lev.tsu@gmail.com',
		favoritColor: 'red',
	};

	printContactInfo(painter);

//

// type aliases can clean up code
	import { UserInfoOutcome } from './9.2-type-aliases';
	
	function maybeGetUserInfo(): UserInfoOutcome {
		if (Math.random() > 0.5) {
			return ['success', { name: 'Levan', email: 'lev.tsu@gmail.com' }];
		} else {
			return ['error', new Error('The Coin landed on TAILS :(')];
		}
	}
//

// inheritance 
	type SpecialDate = Date & { getReason(): string }

	const newYearsEve: SpecialDate = {
		...new Date(),
		getReason: () => "Last day of the year",
	}

	newYearsEve.getReason
	newYearsEve.getTime
//