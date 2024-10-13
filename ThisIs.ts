// Class to handle dynamic type assignment based on the input type
class XFirstClass {
    // This property will hold the created instance of XString, XObject, or XInteger
    public value: XString | XObject | XInteger;

    // Constructor takes a string, number, or object and assigns an instance accordingly
    public constructor(text: string | number | object) {
        // Using switch to determine the type of 'text' and creating appropriate instance
        switch (typeof text) {
            case 'string':
                // If the input is a string, assign an instance of XString
                this.value = new XString(text);
                break;
            case 'number':
                // If the input is a number, assign an instance of XInteger
                this.value = new XInteger(text);
                break;
            case 'object':
                // If the input is an object, assign an instance of XObject
                this.value = new XObject(text);
                break;
            default:
                // Throw an error for unsupported types
                throw new Error('Invalid type');
        }
    }

    // Type guard to check if the instance is XString
    public isXString(): this is XString {
        return this.value instanceof XString;
    }

    // Type guard to check if the instance is XObject
    public isXObject(): this is XObject {
        return this.value instanceof XObject;
    }

    // Type guard to check if the instance is XInteger
    public isXInteger(): this is XInteger {
        return this.value instanceof XInteger;
    }
}

// Extending native classes to create custom types
class XString extends String {}  // XString extends the native String class
class XObject extends Object {}  // XObject extends the native Object class
class XInteger extends Number {} // XInteger extends the native Number class

// Testing with various types

// Example with string input
const text = new XFirstClass('string');
console.log(text.isXString());  // true, since we passed a string and it creates an XString
console.log(text.isXInteger()); // false, since it's not a number
console.log(text.isXObject());  // false, since it's not an object

// Example with number input
const number = new XFirstClass(150);
console.log(number.isXInteger()); // true, since we passed a number and it creates an XInteger
console.log(number.isXObject());   // false, since it's not an object
console.log(number.isXString());   // false, since it's not a string

// Example with object input
const object = new XFirstClass({});
console.log(object.isXObject());   // true, since we passed an object and it creates an XObject
console.log(object.isXInteger());  // false, since it's not a number
console.log(object.isXString());   // false, since it's not a string
