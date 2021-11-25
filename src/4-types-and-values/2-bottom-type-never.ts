// Bottom Type: Never

    // Exhaustive conditionals

        class SmallCar {
            drive() {
                console.log("vroom")
            }
        }

        class Truck {
            tow() {
                console.log("dragging something")
            }
        }

        class Boat {
            swim() {
                console.log('swiming')
            }
        }

        type Vehicle = Truck | SmallCar | Boat // if we add Boat here never value will error

        let myVehicle: Vehicle = new Boat();

        // The exhaustive conditional 
        if (myVehicle instanceof Truck) {
            myVehicle.tow()
        } else if (myVehicle instanceof SmallCar) {
            myVehicle.drive()
        } else {

            // since myVehicle can either be an instance of a car or a truck if in the future someone adds another
            // type (e.g. boat) the TS will highlight an error with the neverValue below. This is useful because if we
            // need to handle all the possible types of myVehicle in case of change in the future TS will tell us
            // where we shoudl pay attantion 
            const neverValue: never = myVehicle;
        }

    //

    // handling never gracfully
        
        // What has happened above is that when we add Boat as a possible type of a Vehicle, TS alerts to the fact that 
        // a new possibility for Vehicle has been introduced. As a result, we don't end up with the type for myVehicle 
        // as a never in that final esle claus.
        
        // We can handle this situation gracefully by creating an UnreachableError class

        class UnreachableError extends Error {
            constructor(_nvr: never, message: string) {
                super(message)
            }
        }

        if (myVehicle instanceof Truck) {
            myVehicle.tow()
        } else if (myVehicle instanceof SmallCar) {
            myVehicle.drive()
        } else {
            // and throwing it in the unreachable clause
            throw new UnreachableError(myVehicle, `Unexpected vehicle type: ${myVehicle}`) 
        }

    //

//
