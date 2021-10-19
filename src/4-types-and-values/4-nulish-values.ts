// nullish values

// null - there is a value and that value is nothing
// undefined - the value isn't available (yet?)
// void - return value of the function should be ignored

type GroceryCart = {
	fruits?: { name: string; qty: number }[];
	vegetables?: { name: string; qty: number }[];
};

const cart: GroceryCart = {};

cart.fruits.push({ name: 'kumkuat', qty: 1 });

// ! no error because we use non-null assertion operator (!.) Best to use with tests
cart.fruits!.push({ name: 'kumkuat', qty: 1 }); 