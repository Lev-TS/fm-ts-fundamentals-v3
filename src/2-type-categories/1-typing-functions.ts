// If we don't declare function return type, ts is able to infer it
	function add(a: number, b: number) {
		return a + b;
	}
	const result = add(3, '4');
	const p = new Promise(result);

//

// it's best to always declare return types otherwise if we
// return wrong type the error appears where we called the functions

	// good practice ()
		function subtruct(a: number, b: number): number {
			return null; // highlight happens here
		}

		subtruct(subtruct(1, 2), 2);
		subtruct(subtruct(1, 2), 2);
		subtruct(subtruct(1, 2), 2);

	//

	// bad practice
		function _subtruct(a: number, b: number) {
			return null;
		}

		_subtruct(_subtruct(2, 2), 3); // highlight happens here
		_subtruct(_subtruct(2, 2), 3);
		_subtruct(_subtruct(2, 2), 3);
		
	//

//
