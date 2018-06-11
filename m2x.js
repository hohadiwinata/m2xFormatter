var fs = require("fs");

var rawM2X = fs.readFileSync("M2X.json")
var M2X = JSON.parse(rawM2X);

M2X50 = M2X.splice(0,50) //Get the first 50 element of the array

M2X50.forEach(function(soil,index) {
    currentTimestamp = M2X50[index].timestamp.slice(0,18)
    if (index < M2X50.length - 1) {
        nextTimestamp = M2X50[index + 1].timestamp.slice(0,18)
        //Find duplicate at index number
        if(currentTimestamp == nextTimestamp){ //If there is duplicate
            console.log("Duplicate found at index: " + index)
            if(M2X50[index].temperature == '') {
                M2X50[index].temperature =  M2X50[index+1].temperature
                console.log("Copied temperature to index: " + M2X50[index+1].temperature)
            }  
        }
    }
    
})