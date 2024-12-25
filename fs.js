// file system module is used to create or read files
// writeFile: create a file async
const fs = require("node:fs");
const path = require("node:path");
//writeFile: path, data, options: {encoding, flag :a(keep the old data and insert a new one),w (erease the old data and insert new one)}, cb
// const filePath = path.join(__dirname, "content", "file.txt");

// write file asynchronously
// console.log("Start");
// fs.writeFile(
//   filePath,
//   "\n \nI wish I've called you 1000 time",
//   { flag: "a" },
//   (err) => {
//     if (err) throw err;
//     console.log("File was created");
//   }
// );
// console.log("End");

// write file synchronously
// const newTextPath = path.join(__dirname, "content", "lyrics.txt");
// console.log("Start");
// fs.writeFileSync(newTextPath, `Let me see what a sping is like
//     On Jupiter and Mars
//     `, { flag: "a" });
// console.log("End");

// read file async
// const filePathToRead = path.resolve("content", "file.txt");
// fs.readFile(filePathToRead, { encoding: "utf-8" }, (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// const filePathToRead = path.resolve("content", "lyrics.txt");
// const data = fs.readFileSync(filePathToRead, { encoding: "hex" });
// console.log(data);
// const cssPath = path.resolve("content", "style.css");
// const data = fs.writeFileSync(cssPath, "h1{color: red}");
// console.log(data);
const htmlPath = path.resolve("content", "index.html");
 fs.writeFileSync(htmlPath, "<h1>Hello</h1>");

