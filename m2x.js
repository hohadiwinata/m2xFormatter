var fs = require("fs");

var rawM2X = fs.readFileSync("M2X.json")
var M2X = JSON.parse(rawM2X);

M2X50 = M2X.splice(0,50) //Get the first 50 element of the array

M2X50.forEach(function(soil,index) {
    currentTimestamp = M2X50[index].timestamp.slice(0,18)
    currentObject = M2X50[index]
    nextObject = M2X50[index+1]
    if (index < M2X50.length - 1) {
        nextTimestamp = M2X50[index + 1].timestamp.slice(0,18)
        //Find duplicate at certain index number
        if(currentTimestamp == nextTimestamp){ //If there is duplicate
            console.log("Duplicate found at index: " + index) //print the duplicate at index
            //Begin copying if the value of next object if not empty
            if(nextObject.temperature != '') {
                currentObject.temperature =  nextObject.temperature
                console.log("Copied temperature to index: " + nextObject.temperature)
            }  
            if(nextObject.moisture != '') {
                currentObject.moisture =  nextObject.moisture
                console.log("Copied moisture to index: " + nextObject.moisture)
            }  
            if(nextObject.Battery != '') {
                currentObject.Battery =  nextObject.Battery
                console.log("Copied Battery to index: " + nextObject.Battery)
            }  
            M2X50.splice(index+1,1) //Remove the next object from array
        }
    }
    
})

console.log(M2X50)