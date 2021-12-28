
## react app

Udemy section 1 lecture 20.
https://www.udemy.com/course/typescript-for-professionals/learn/lecture/22097410#overview

```bash
npx create-react-app react-example --template typescript
```

## new project

How to create a new package:

```bash
mkdir <projectname>
cd <projectname>
npm init -y
npm i typescript -D
npx tcs --init --rootDir src --outDir lib --sourceMap --declaration --declarationMap
```

Edit `package.json`:

```json
"main": "lib",
"types": "lib",
"scripts": {
  "build", "tsc"
}
```

To build the package:
```bash
npm run build
```

To publish the package for anyone to use it:
```bash
npm publish
```

## dependencies


## test (non udemy course) 
https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2

https://www.chaijs.com/api/assert/

### typescript (might conflict with test)

To install typescript dependencies and create 
the configuration file `tsconfig.json`:

```bash
npm install -S typescript
npx tsc --init --rootdir . --outdir lib
```

Create a `.ts` file with the following typescript content

```typescript
let message: string = 'Hello there ;-)';
console.log(message)
```

To compile the typescript files into regular javascript files,
run:
```bash
npx tsc --watch
```

Look in the lib directory for the compiled `.js` file. The
content should be:

```javascript
use strict";
let message = 'Hello there ;-)';
console.log(message);
```

To run this file:
```bash
node lib/src/ts/s1_1_hello.js 
```
