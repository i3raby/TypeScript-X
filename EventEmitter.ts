// Import EventEmitter class from the Node.js 'events' module
import EventEmitter from 'node:events';

// Define an interface that describes the events and their arguments
interface ClassEvents {
    // The 'debug' event has a single argument, 'message', which is a string
    debug: [message: string];
}

// Create a class X that extends EventEmitter, using ClassEvents for strongly typed events
class X extends EventEmitter<ClassEvents> {}

// Instantiate a new object of class X
const x = new X();

// Listen for the 'debug' event on the instance 'x'
x.on('debug', (message) => {
    // The callback function checks if the message contains an empty string (true for any string)
    return message.includes('');
});
