const fs = require ('fs');
const { list } = require('./functions/list');
const { find } = require ('./functions/find');
const { edit } = require("./functions/edit");

console.log (list());
console.log(find('estudiar'));
console.log(edit("estudiar","de vez en cuando los jueves"));