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

    //function overloads

        //  this is not good because we allowed too many possibilities for val
            type FormSubmitHandler = (data: FormData) => void;
            type MessageHandler = (evt: MessageEvent) => void;

            function handleMainEvent_1(
                elem: HTMLFormElement | HTMLIFrameElement, 
                handler: FormSubmitHandler | MessageHandler
            ) {};

            const myFrame_1 = document.getElementsByTagName("iframe")[0];

            handleMainEvent_1(myFrame_1, (val) => {}) // type of cb is any

            // we are allowing too many possibilities, e.g. using a HTMLIFrameElement with FormSubmitHandler, which
            // doesn't make any sense. We can address this using function overloads
                
                function handleMainEvent( // first head (type) of a functuin
                    elem: HTMLFormElement,
					handler: FormSubmitHandler
				): void
                function handleMainEvent( // second head (type) of a function
					elem: HTMLIFrameElement,
					handler: MessageHandler
                ): void
                function handleMainEvent( // implementation of a function should include all possible heads
                    elem: HTMLFormElement | HTMLIFrameElement, 
                    handler: FormSubmitHandler | MessageHandler
                ) { }; 

                const myFrame = document.getElementsByTagName('iframe')[0];
                const myForm = document.getElementsByTagName('form')[0];

                // since the first arg is myFrame, TS understand that we are using the second head of the function and 
                // expects the type of cb to be MessageHandler
                handleMainEvent(myFrame, (val) => {}) 

                // myForm -> first head -> type of cb is FormSubmitHandler 
                handleMainEvent(myForm, (val) => {})  

            //

        //

    //

//