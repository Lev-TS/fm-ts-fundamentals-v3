// tuple is an multi-element, ordered data structure, where position of each item has some special meaning or voncetion.

    {
        // this is a tuple and by distructuring it we can get year, make, and model
        let myCar: [number, string, string] = [2017, 'Toyota', 'RAV4'];
        const [year, make, model] = myCar;
        // typing tuple has two value, it can save provide types at each arr index and it can provide the size of arr
        myCar = [2016, 'Honda', 'CR-V']; // OK
        myCar = ['Honda', 2016, 'CR-V']; // ERROR: not the right convention
        myCar = [2016, 'Honda', 'CR-V', 'manual']; // ERROR: too many items

        // BEWARE: TS won't provide any support if we treat tuples as arrays and mutate them. 
        // e.g. notice that there are no errors below
        myCar.push(6); // OK :(
        myCar.pop(); // OK :(
    }

//
 