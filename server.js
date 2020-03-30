const express = require("express");
const app = express();
const {c, cpp, node, python, java} = require('compile-run');

const sourcecode = "hoge = 1\nif hoge>= 1 :\n  print(hoge+1)\nelse:\n  print(hoge)\nprint(\"hoge\")";
let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(result => {
        console.log(result.stderr == ""?result.stdout:result.stderr);
    })
    .catch(err => {
        console.log(err);
    });

const server = app.listen(3000, ()=>console.log("server start"));