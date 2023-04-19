const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");
const { list } = require("./list");
const dataParseada = JSON.parse(data);

function find(param) {
    const titulos = list();
    return titulos.includes(param);
  }


module.exports = { find };



