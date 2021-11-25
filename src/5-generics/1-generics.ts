// generics are types that are expressed in terms of other types

const input = [
	{ customerId: '0001', areaCode: '321', num: '123-4566' },
	{ customerId: '0002', areaCode: '174', num: '142-3626' },
	{ customerId: '0003', areaCode: '192', num: '012-7190' },
	{ customerId: '0005', areaCode: '402', num: '652-5782' },
	{ customerId: '0004', areaCode: '301', num: '184-8501' },
];

const output = {
	'0001': {
		customerId: '0001',
		areaCode: '321',
		num: '123-4566',
	},
	'0002': {
		customerId: '0002',
		areaCode: '174',
		num: '142-3626',
	},
	/*... and so on */
};

const phones: {
	[k: string]: {
		customerId: string;
		areaCode: string;
		num: string;
	};
} = {};

phones.home;
phones.work;
phones.fax;


// tailored approach to transform input to output
	interface PhoneInfo {
		customerId: string;
		areaCode: string;
		num: string;
	}


	function listToDictSpecific(
		list: PhoneInfo[], // take the list as an argument
		idGen: (arg: PhoneInfo) => string // a callback to get Ids
	): { [k: string]: PhoneInfo } {
		// create an empty dict
		const dict: { [k: string]: PhoneInfo } = {}

		// loop through the array
		list.forEach((el) => {
			const dictKey = idGen(el)
			dict[dictKey] = el
		})

		return dict
	}

	console.log(listToDictSpecific(input, (item) => item.customerId)); // should be similar to output
//

// we can generalize the code above 
	function listToDictGeneric<T>(
		list: T[],
		idGen: (arg: T) => string
	): { [k: string]: T} {
		const dict: { [k: string]: T } = {}

		list.forEach((el) => {
			const dictKey = idGen(el);
			dict[dictKey] = el;
		});

		return dict
	}
// 