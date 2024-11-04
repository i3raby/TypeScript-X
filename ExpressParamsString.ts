// Helper type to split routes by '/' or other delimiters
type RouteString<M extends string, R extends string> = M extends `${infer P}${R}${infer Rest}`
  ? P
  : M;

// Retrieves the path segment without additional delimiters
type GetRoutePath<R extends string> = RouteString<
  RouteString<RouteString<R, `/${string}`>, `-${string}`>,
  `.${string}`
>;

// Dictionary for capturing parameterized paths
interface ParamsDictionary {
  [key: string]: string;
}

// Extracts route parameters as a type
type RoutePath<Route extends string> = string extends Route
  ? ParamsDictionary // If Route is a general string
  : Route extends `${string}(${string}` // If route includes `(`, it's dynamic
  ? ParamsDictionary
  : Route extends `${string}:${infer Rest}` // Route includes parameter
  ? & (
      GetRoutePath<Rest> extends never
        ? ParamsDictionary
        : GetRoutePath<Rest> extends `${infer Path}?`
        ? { [P in Path]?: string } // Optional path parameter
        : { [P in GetRoutePath<Rest>]: string } // Required path parameter
    ) &
      // Recurse on remaining path
      (Rest extends `${GetRoutePath<Rest>}${infer Next}` ? RoutePath<Next> : unknown)
  : {}; // Default case, no parameters

// APIRequest class handling paths and type-safe route params
class APIRequest<Route extends string, P = RoutePath<Route>> {
  public paths: P; // Type-safe path params

  public constructor(path: Route) {
    this.paths = {} as P; // Initialize paths to satisfy TypeScript
    console.log(path); // Log the route path
  }
}


const api = new APIRequest('/users/:id/:db/:uuid');


api.paths.uuid;
