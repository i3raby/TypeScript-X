// Define an interface to specify the structure of the options object that can be passed to the API function.
export interface APIOptions {
    oOne?: string;
    ooOne?: string;
    oooOne?: string;
    ooooOne?: string;
}

// Define the API function that takes an object as a parameter.
// The Omit utility type is used to exclude 'oooOne' and 'ooooOne' properties from the APIOptions interface.
export const API = (options: Omit<APIOptions, 'oooOne' | 'ooooOne'>) => {
    // The function checks if both 'oOne' and 'ooOne' are defined (truthy).
    // If both are defined, the result will be true; otherwise, it will be false.
    return options.oOne && options.ooOne;
}


