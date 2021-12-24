

## dependencies

## test 

```bash
npm install --save-dev mocha
npm install --save-dev chai
```
Create a test spec in the test directory and test it 
with 
```bash
./node_modules/mocha/bin/mocha test
```
After this works, edit `package.json` scripts part:

```json
"scripts": {
    "test": "mocha"
  },
```

### typescript

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
