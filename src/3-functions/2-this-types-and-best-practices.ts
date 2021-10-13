// we should always define the type of "this"
    function myClickHandler_1(event: Event) {
        this.disabled = true // errors because TS is anaware of the type of "this"
    }

    function myClickHandler(
        this: HTMLButtonElement, // define the type of "this"
        event: Event
    ) {
        this.disabled = true
    }
//

const myButton = document.getElementsByTagName("button")[0];

// option 1: bind "this" to the context of myButton
const boundHandler = myClickHandler.bind(myButton); 
boundHandler(new Event("click"))

// option 2: explicitly passing the given "this" context with .call method also works
myClickHandler.call(myButton, new Event('click'));