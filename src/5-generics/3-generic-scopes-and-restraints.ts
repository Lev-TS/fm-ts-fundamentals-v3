// assuming we have some property on the dictionary that exists on every object, we can define a minimum requirements
// that each generic type should have
{
	// one way to do this is without generics
	{
		interface HasId {
			id: string;
		}

		interface Dict<T> {
			[k: string]: T;
		}

		const listToDict = (list: HasId[]): Dict<HasId> => {
			const dict: Dict<HasId> = {};

			list.forEach((item) => {
				dict[item.id] = item;
			});

			return dict;
		};
	}

	// another way is to extend the type
	{
		interface HasId {
			id: string;
		}

		interface Dict<T> {
			[k: string]: T;
		}

		const listToDict = <T extends HasId>(list: T[]): Dict<T> => {
			const dict: Dict<T> = {};

			list.forEach((item) => {
				dict[item.id] = item;
			});

			return dict;
		};
	}
}

// type parameters have the literal scope
{
	const tupleCreator = <T>(first: T) => {
		// outer function
		return function finish<S>(last: S): [T, S] {
			// inner function
			return [first, last];
		};
	};

	const finishTuple = tupleCreator(3);
	const t1 = finishTuple(null); // [number, null]
	const t2 = finishTuple([4, 8, 15, 16, 23, 42]); // [number, number[]]
}

// Best Practices
{
	// Use each type parameter at least twice. Any less and you might be casting 
	{
		const returnAs = <T>(arg: any): T => {
			return arg;
		};

		const first = returnAs<number>(window); // ! DANGER (return type of window cast to a number)

		const sameAs = window as any as number; // * when casting types best to use the "as" keyword
	}

	// Define type parameters as simply as possible
	{
		interface HasId {
			id: string;
		}
		interface Dict<T> {
			[k: string]: T;
		}

		const ex1 = <T extends HasId[]>(list: T) => {
			return list.pop();
		}; // ! BAD (we've lost the return type T)

		const ex2 = <T extends HasId>(list: T[]) => {
			return list.pop();
		}; // + GOOD (Return type T)
	}
}
