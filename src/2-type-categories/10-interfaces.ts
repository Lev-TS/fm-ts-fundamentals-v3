// interface - a way to define only an object type. It can't use unions like type aliases.
// basically it descrribes how an instance of a class can look like.
    interface UserInfo {
        name: string;
        email: string;
    }

    function printUserInfo(info: UserInfo) {
        info.email;
        info.name;
        info.phone; // ERROR: no such property on the interface
        info.messenger 
    }

    // interfaces are open so when we declare another with the same name we are adding a new type to eat. It doens't 
    // matter where we redeclare it. This would affects all places where this interface is used. This is very usefull
    // to add new things to the global objects or external libraries
    interface UserInfo {
		messenger: string;
	}


//

// inheritance 
    // extends
        {
            class Animal {
                eat(food: string) {
                    return `eating ${food}`;
                }
            };

            class Dog extends Animal {
                bark() {
                    return "wook";
                }
            };

            const barry = new Dog();
            
            barry.eat() // ERROR: TS wants us to pass the food 
            barry.bark()
        }

        
        // like JS classes, interface can also extend other interfaces

            interface Animal {
                isAlive(): boolean;
            }

            interface Mammal extends Animal {
                getFurOrHairColor(): string;
            }

            interface Dog extends Mammal {
                getBreed(): string;
            }

            function careForDog(dog: Dog) {
                dog.getBreed();
                dog.getFurOrHairColor();
                dog.isAlive();

                dog.eat(); // ERROR: eat is included neither in Animal, Mammel, or Dog interface. 
            }

        //

    //

    // implements
        interface AnimalLike {
            eat(food: string): void;
        }

        class Dog implements AnimalLike {
            // at this level, TS only shouts when there is no eat method in the class, it doesn't even check if the
            // method is correct
            eat() {
                return "eating"
            } 

            bark() {
                return "woof"
            }
        }

    //

    // extend and implement can be used together
        {
            class LivingOrganism {
                isAlive() {
                    return true
                }
            }    

            interface AnimalLike {
                eat(food: string): void
            }

            interface CanBark {
                bark(): string;
            }

            class Dog
                extends LivingOrganism
                implements AnimalLike, CanBark // can implement several interfaces
            {
                bark() {
                    return "woof"
                }

                eat(food: string) {
                    console.log(`eating ${food}`);
                }
            }

            const barry = new Dog();
            barry.isAlive()
            barry.eat("bone")
            barry.bark()
            barry.run()
        }

    //

    // type aliases with implement

        // we can use type aliases with implement as long as the choice is between objects. But if we make a mistake and
        // implement a calss with the type aliases that is either JS object or some primitive than we will get the error. 
        // that is why it's always best to use interfaces and avoid type aliases when implementing a class.
    
    //

    // type or interface, which one to use? Not a big difference but:

        // 1. if you need to define something other than an object type use alias
        // 2. if you need to define type to use with "implements" heritage term use interface
        // 3. If you need to allow consumers of your types to augment them, you must use an interface

    //

    // Recursion

        // as of TS 3.7 we can recurse the types like NestedNumbers

        type NestedNumbers = number | NestedNumbers[]

        const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221]

        if (typeof val !== "number") {
            val.push(41)
            val.push('string') // ERROR: because it's neither number nor array of numbers or NestedNumbers
        }

    //

//