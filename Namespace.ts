// Define a namespace to encapsulate functionality and avoid global scope pollution
namespace XNamespace {
    // A function inside the namespace that takes a string argument and returns it
    export function XNamespaceFunction(text: string) {
        return text; // Simply returns the input text
    }
}

// Usage example
// You can now call the function as XNamespace.XNamespaceFunction('example');
