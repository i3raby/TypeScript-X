// Define a generic interface that accepts a type `T`.
// The interface has a property `text` of type `T`.
interface InterfaceTypes<T> {
    text: T;
}

// A function that expects an argument of type `InterfaceTypes<string>`.
// This means that the `text` property must be a string.
const xString = (x: InterfaceTypes<string>) => {
    // Function logic could go here
};

// A function that expects an argument of type `InterfaceTypes<number>`.
// The `text` property must be a number in this case.
const xNumber = (x: InterfaceTypes<number>) => {
    // Function logic could go here
};

// A function that expects an argument of type `InterfaceTypes<boolean>`.
// The `text` property must be a boolean.
const xBoolean = (x: InterfaceTypes<boolean>) => {
    // Function logic could go here
};

// A function that expects an argument of type `InterfaceTypes<bigint>`.
// The `text` property must be a BigInt type.
const xBigInt = (x: InterfaceTypes<bigint>) => {
    // Function logic could go here
};

// A function that expects an argument of type `InterfaceTypes<object>`.
// The `text` property must be an object.
const xObject = (x: InterfaceTypes<object>) => {
    // Function logic could go here
};

// A function that expects an argument of type `InterfaceTypes<Array<any>>`.
// The `text` property must be an array of any type.
const xArray = (x: InterfaceTypes<Array<any>>) => {
    // Function logic could go here
};

// Now we can call each function with appropriate values:

// Call the xString function with an object where `text` is a string.
xString({ text: '' });

// Call the xNumber function with an object where `text` is a number.
xNumber({ text: 12 });

// Call the xBoolean function with an object where `text` is a boolean value.
xBoolean({ text: true });

// Call the xBigInt function with an object where `text` is a BigInt value.
xBigInt({ text: 0n });

// Call the xObject function with an object where `text` is an empty object.
xObject({ text: {} });

// Call the xArray function with an object where `text` is an empty array.
xArray({ text: [] });
