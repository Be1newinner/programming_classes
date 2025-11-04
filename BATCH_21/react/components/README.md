# NOTES

- Html code me javascript inject krne k liye {} use krenge
- Javascript me html use krne k liye return keyword

## Components

it is a function which implements following conditions

1. function name should be in PascalCase
2. This will return html component
3. The arguments will be passed as object in component
4. The file extension will be .tsx or .jsx
5. for importing we will use

```javascript
// default import
import componentName from "filename.tsx";

// named import
import { componentName } from "filename.tsx";
```

6. for exporting we will use

```javascript
// default export
export default componentName;

// named export
export { componentName };
```

- ONLY ONE COMPONENT in a file will be default import and default export. all other components will lie in named export and named import

7. export variables

```javascript
const name = "Vijay";

// default export
export default name;

// named export
export const name = "Vijay";

// or
export { name }; // since it is defined above already
```

