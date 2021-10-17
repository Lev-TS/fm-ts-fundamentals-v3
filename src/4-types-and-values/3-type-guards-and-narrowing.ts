let value:
	| Date
	| null
	| undefined
	| 'pineapple'
	| [number]
	| { dateRange: [Date, Date] };

// built in typeguards

    // instaneof
    if (value instanceof Date) {
        value; // Date
    }

    // typeof
    else if (typeof value === 'string') {
        value; // pineapple
    }

    // specific value check
    else if (value === null) {
        value; // null
    }

    // Truthy/falsy check
    else if (!value) {
        value; // undefined
    }

    // some built-in functions
    else if (Array.isArray(value)) {
        value; // [number]
    }

    // Property presence check
    else if ('dateRange' in value) {
        value; // { dateRange: [Date, Date ] }
    }

    // everything else
    else {
        value; // never
    }

//

// user defined type guards

    interface CarLike {
        make: string
        model: string
        year: number
    } 

    let maybeCar: unknown

    // return type of "valueToTest is Carlike" is what makes this a type guards
    function isCarLike(valueToTest: any): valueToTest is CarLike {
        return (
            valueToTest &&
            typeof valueToTest === "object" &&
            'make' in valueToTest &&
            typeof valueToTest["make"] === "string" &&
            "model" in valueToTest &&
            typeof valueToTest["model"] === "string" &&
            "year" in valueToTest && 
            typeof valueToTest["year"] === "number"
        )
    }

    if(isCarLike(maybeCar)) {
        maybeCar
    }

    // typeguard is as good as the check we make below and the assertion that we made as the return value
    // so if we say that valueToTest is always true and it is a Carlike, TS will treat even a primitive 
    // as our assertion

        interface TruckLike extends CarLike {
            tow: () => void
        }

        let maybeTruck = 1;

        function isTruckLike(valueToTest: any): valueToTest is TruckLike {
            return true
        }

        if (isTruckLike(maybeTruck)) {
            maybeTruck.tow() // this is not erroring because TS thinks it's a TruckLike
        }   

    //

    // another type of typeguard enables us to ditch the conditional
        function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
            if( 
                !(
                    valueToTest &&
                    typeof valueToTest === "object" &&
                    'make' in valueToTest &&
                    typeof valueToTest["make"] === "string" &&
                    "model" in valueToTest &&
                    typeof valueToTest["model"] === "string" &&
                    "year" in valueToTest && 
                    typeof valueToTest["year"] === "number"
                )
            ) { throw new Error(`Value does not appear to be a CarLike ${valueToTest}`)}
        }

        maybeCar // type is unknown
        assertsIsCarLike(maybeCar) // but if we assert
        maybeCar // now type is CarLike

    //

//