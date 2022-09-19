const { getName } = require('./functions')

console.log('getName() >>', getName({ first: 'a', last: 'b' }));
// terminal // npx tsc functions.ts
// terminal // node js-function-tests.js
// getName() >> a b