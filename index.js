// 1- Modules :
// 1-1- Local modules
// 1-2- Built-in modules
// 1-3- Third party modules

// CommonJS

// require("./bob");
// require("./frank");

const data = require("./names");
console.log(data);

//***RECAP*** */

// Nodejs : a javascript, open-source, cross platform runtime environement, built on top of V8 engine.
// Run JavaScript outside the browser
// JS Library ==> modules to execute C/C++ features (low level language) => file handling, networkig, databases access, crypting...
// Node JS : Web Server/REST API SERVER
// Recieve some requests and respond with some responses (files, data)
// EXPRESS JS => framework Node JS
// 3 types of modules :
//  1- Local modules (custom module) : is a JavaScript file with and export
//  2- Built-in module -- already exists in Node JS (path, fs, events, http )
//  3- Third party modules (external packages ==> npm (node package manager))

// Path module : works, handle and create path
// Global variables (__dirname, __filename, require, module)