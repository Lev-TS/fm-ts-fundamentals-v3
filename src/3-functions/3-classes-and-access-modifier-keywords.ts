//
    class Car {
        constructor(make, model, year) {
            this.make = make
            this.model = model
            this.year = year
        }
    }

    // TS knows that it's the instance of a car but we don't know what are the type instances
    let sedan = new Car("Honda", "Accord", 2017)
    sedan.activateTurnSignal("left")

    // declaring the types
        class GoodCar {
            make: string
            model: string
            year: number
            constructor(make: string, model: string, year: number) {
                this.make = make
                this.model = model
                this.year = year
            }
        }

        let goodSedan = new GoodCar("Honda", "Accord", 2017);
        let badSedan = new GoodCar(2017, "Honda", "Accord"); // Errors
    //

    // access modifiers keywords

        // "public": everyone can access (this is default)
        // "protected": ths instance itself and subclasses can access
        // "private": only this instance itself can access

        class BetterCar {
            public make: string
            public model: string
            public year: number

            protected vinNumber = 345839458395
            private doorLockCode = 28435

            constructor(make: string, model: string, year: number) {
                this.make = make
                this.model = model
                this.year = year
            }

            protected unlockAllDoors() {
                console.log('unlockCar', this, this.doorLockCode)
            }
        }

        class Sedan extends BetterCar {
            constructor(make: string, model: string, year: number) {
                super(make, model, year)

                this.vinNumber // No error because accessible in sub class
                this.doorLockCode // Errors because it is onle accessible within the parent class
            }

            public unlock() {
                console.log("Unlocking at " + new Date().toISOString())
                this.unlockAllDoors() // No error because it's protected property
            }
        }

        const honda = new Sedan('honda', 'accord', 2013)

        honda.unlock() // No error because it's a public method
        honda.unlockAllDoors() // error becasue it's a protected method
    //

    // JS private #fields new feature in JS
        class CarWithPrivateField {
            #year: number; // This errors because of babel, not important here

            constructor(year: number) {
                this.#year = year;
            }
        }

        const c = new CarWithPrivateField(2013)
        c.#year // not available because it's private

    //

    // readonly properties

        class CarWithReadonlyField {
            public readonly year: number;


            constructor(year: number) {
                this.year = year;
            }

            updateYear() {
                this.year ++ // Errors because we can't reasign read-only properties
            }
        }        
        
    //

    // TS provides a consise syntax to write class

        // This

            class ExtendedSyntaxClass {
                make: string
                model: string
                year: number
                constructor(make: string, model: string, year: number) {
                    this.make = make
                    this.model = model
                    this.year = year
                }
            }

        // is same as this

            class ConsiseSyntaxClass {
                constructor(
                    public make: string,
                    public model: string,
                    public year: number
                ) {}
            }

        //


    //

//