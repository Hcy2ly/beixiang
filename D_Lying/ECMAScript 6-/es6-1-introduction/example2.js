"use strict";

console.log(function (x) {
  return x * 2;
}(1));

// var es6Code = "let x = n => n + 1";
// var es5Code = require("@babel/core").transform(es6Code, {
//   presets: ["@babel/env"]
// }).code;

console.log(es5Code);

[1, 2, 3].map(function (x) {
  return x * x;
});
console.log("hello\nworld\nlonglive");
