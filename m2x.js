var fs = require("fs");

var m2x = fs.readFileSync("M2X.json")
var jsonM2X = JSON.parse(m2x);

var currentRow=0;



console.log(jsonM2X[0].timestamp.slice(0,18))
console.log(jsonM2X[1].timestamp.slice(0,18))


console.log("Removing array 1")

removed=jsonM2X.splice(1,1)


console.log(jsonM2X[1].timestamp.slice(0,18))
console.log(removed)