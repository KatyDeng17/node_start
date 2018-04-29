const path = require('path'); // require('path') comes with node.js  

const hello = `Hello, this is from.`; 
console.log(`${hello} ${path.basename(__dirname)}`);
console.log(`${hello} ${path.basename(__filename)}`);
console.log(hello);


// const hello = `this is Katy's wonderland`; 
// console.log(__dirname);
// console.log(__filename);
