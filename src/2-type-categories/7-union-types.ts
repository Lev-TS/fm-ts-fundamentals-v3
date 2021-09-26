// union types means that the value can be of one or another type

    // this function can reaturn either "heads" or "tails"
        function flipCoin(): "heads" | "tails" {
            if (Math.random() > 0.5) return "heads";
            return "tails"
        }
    //

    //
        function maybeGetUserInfo(): ["error", Error] | ["success", { name: string; email: string}] {
            if (flipCoin() === "heads") {
                return [
                    "success",
                    { name: "Levan", email: "lev-ts@gmail.com"}
                ]
            } else {
                return [
                    "error",
                    new Error("The coin landed on TAILS :(")
                ]
            }
        }
    //

    // we see that this will return either success or error
    const outcome = maybeGetUserInfo();

    // consuming outcome
    const [ first, second ] = outcome;
    
    // when we have union we can see only the common behaviour. e.g. name also exists on Error object so on the second
    // variable if we try to access name property ts won't error but if we try to access email property it will.
    second.name
    second.email
    
    // we can use tyoe guards to access what we need
        if (second instanceof Error) {
            second.name
            second.message
            second.stack

            second.email // ERROR: no email property on error object
        } else {
            second.name
            second.email

            second.message // ERROR: no message property on success object
        }
    
    //

    // discriminated unions (this requires tags like error, success and such. THis can be used with switch statements)
        if (outcome[0] === "error" ) {
            outcome[1].message
            outcome[1].name
            outcome[1].stack
        } else {
            outcome[1].email
            outcome[1].name
        }

    //

//
