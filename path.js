const path = require("path");

// const result = path.basename(__dirname);
// const result = path.basename(__filename, ".js");
// console.log("result:", result);
// console.log(__filename)

// console.log(path.delimiter)
// console.log(process.env.PATH);
// let extname = path.extname(__filename)
// console.log(extname)
// const isAbsolute = path.isAbsolute(__dirname)
// const isAbsolute = path.isAbsolute("folder1\\folder2\\folder3")
// console.log(isAbsolute)

// myFolder/myFolder1/text.txt
const myPath = path.join("myFolder", "myFolder1", "text.txt");
const isPathAbsolute = path.isAbsolute(myPath);
console.log(isPathAbsolute);
