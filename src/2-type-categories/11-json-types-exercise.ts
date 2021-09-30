type Primitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];

// this is how we define JSON type, we can use this to indicate that the value will be a JSON, e.g. XHR result. This
// will tell us that there are no functions on that object.
type JSONValue = Primitive | JSONArray | JSONObject; 

