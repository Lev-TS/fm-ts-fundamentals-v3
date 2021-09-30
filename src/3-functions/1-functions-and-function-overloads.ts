// Callable types
    
    // this are the same 
        interface TwoNumberCalcTypeInterface {
            (c: number, y: number): number
        }

        type TwoNumberCalcTypeAlias = (x: number, y: number) => number

    //

    const addNum: TwoNumberCalcTypeInterface = (a, b) => a + b;
    const subtractNum: TwoNumberCalcTypeAlias = (a, b) => a - b;
    
    // void (shows that return type of this function shouldn't be used)
        function printFormattedJSON(obj: string[]) {
            console.log(JSON.stringify(obj, null, "  "))
        }

        const x = printFormattedJSON(["hello", "world"]) // x is undefined
    //

    // void vs undefined (the main difference is that the return value with void can be ignored but with undefined it
    // must be undefined )
        function invokeInFourSeconds( cb: () => void) {
            setTimeout(cb, 4000)
        }

        function invokeInFiveSeconds( cb: () => undefined) {
            setTimeout(cb, 4000)
        }

        const values: number[] = [];
        
        invokeInFourSeconds(() => {
            return values.push(4)
        })

        // Errors because we defined return type of the CB to be undefined while arr.push not only pushes the element
        // but also returns the length of a new arr
        invokeInFiveSeconds(() => { 
            return values.push(4)
        })

    //

    // Construct signatures
        interface DateConstructor {
            new (value: number): Date
        };
        
        let MyDateConstructor: DateConstructor = Date;
        const d = new MyDateConstructor();

    //
//