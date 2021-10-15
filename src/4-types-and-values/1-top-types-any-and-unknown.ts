// Top Types: any & unknown

    // any

        {
            let flexible: any = 4;
            flexible = 'text';
            flexible = window.document;
            flexible = setTimeout;

            // it is possible to access any property;
            flexible.length()
            flexible.toFixed(2)
            flexible.some.nested.property
        }

    //

    // unknown

        {
            let flexible: unknown = 4;
            flexible = 'text';
            flexible = window.document;
            flexible = setTimeout;

            // the main difference with any is that we can't acces it's properties unless we use some type guards
            console.log(flexible.length())
            console.log(flexible.toFixed(2))

            //instead we could do the following
            if (typeof flexible === "string") {
                // this code runs for { flexible| all strings}
                console.log(flexible.length)
            } else if (typeof flexible === "number") {
                // this code runs for { flexible| all numbers}
                console.log(flexible.toFixed(2))
            } else {
                // this code runs for "the leftovers"
            }

        }

    //
    
//