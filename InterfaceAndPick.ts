// Define an interface to specify the structure of the options object that can be passed to the API function.

export interface APIOptions {
    // Optional string properties (they can be undefined)
    oOne?: string;
    ooOne?: string;
    oooOne?: string;
    ooooOne?: string;
}

// Define the API function that takes an object as a parameter.
// The Pick utility type is used to select only the 'oOne' and 'ooOne' properties from the APIOptions interface.
export const API = (options: Pick<APIOptions, 'oOne' | 'ooOne'>) => {
    // The function checks if both 'oOne' and 'ooOne' are defined (truthy).
    // If both are defined, the result will be true; otherwise, it will be false.
    return options.oOne && options.ooOne;
}
