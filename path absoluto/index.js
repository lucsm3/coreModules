//dados dinamicos paths dinamicos

const path = require("path")

//path absoluto
console.log(path.resolve('teste.txt'))

const midFolder = "relatorios"
const fileName = "lucas.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName);

console.log(finalPath)