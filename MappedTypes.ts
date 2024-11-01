// Define an interface named `Interface` with optional properties.
interface Interface {
    String?: string;  // Optional property of type string
    Boolean?: boolean; // Optional property of type boolean
}

// Define a mapped type `TypeScriptType<R>` that transforms the properties of type R.
type TypeScriptType<R> = {
    [T in keyof R]: Interface; // For each key T in R, create a property of type `Interface`
}

// Define a generic function `TypeScript` that takes an argument of type T.
function TypeScript<T extends TypeScriptType<T> | TypeScriptType<any>>(a: T): T {
    // The function simply returns the argument a of type T
    return a;
}

// Call the TypeScript function with an object that matches the expected structure.
const Types = TypeScript({
    ArabyGithub: { // Key of the object
        String: ''  // Assign an empty string to the String property
    },
    Araby: { // Another key of the object
        Boolean: true // Assign true to the Boolean property
    }
});

// Log the value of Types.ArabyGithub to the console
console.log(Types.ArabyGithub); // Outputs: { String: '' }

// Log the value of Types.Araby to the console
console.log(Types.Araby); // Outputs: { Boolean: true }
