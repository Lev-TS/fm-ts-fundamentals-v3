// Intersection types are closely related to union types, but they are used very differently. An intersection type 
// combines multiple types into one. This allows you to add together existing types to get a single type that has all 
// the features you need. 

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

function makeWeek(): Date & { end: Date } {
    const start = new Date();
    const end = new Date(start.valueOf() + ONE_WEEK)

    const output = { ...start, end }; 
    return output
}

const thisWeek = makeWeek();
thisWeek.toISOString();
thisWeek.end.toISOString();