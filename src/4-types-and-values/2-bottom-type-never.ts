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

        type Vehicle = Truck | SmallCar

        let myVehicle: Vehicle = obtainRandomVehicle()

        // The exhaustive conditional 
        if (myVehicle instanceof Truck) {
            myVehicle.tow()
        } else if (myVehicle instanceof SmallCar) {
            myVehicle.drive()
        } else {

            // since myVehicle can either be an instance of a car or a trcuk if in the future someone adds another
            // type (e.g. boat) the TS will highlight an error with the neverValue below. This is useful because if we
            // need to handle all the possible types of myVehicle in case of change in the future TS will tell us
            // where we shoudl pay attantion 
            const neverValue: never = myVehicle;
        }

    //

//
