var fs = require("fs");

//Use synthax node m2x input.json output.json
var myArgs = process.argv.slice(2);

var rawM2X = fs.readFileSync(myArgs[0])
var M2X = JSON.parse(rawM2X);

M2XTrim = M2X.splice(0,1000) //Get the first 1000 element of the array

M2XTrim.forEach(function(soil,index) {
    currentTimestamp = M2XTrim[index].timestamp.slice(0,18)
    currentObject = M2XTrim[index]
    nextObject = M2XTrim[index+1]
    if (index < M2XTrim.length - 1) {
        nextTimestamp = M2XTrim[index + 1].timestamp.slice(0,18)
        //Find duplicate at certain index number
        if(currentTimestamp == nextTimestamp){ //If there is duplicate
            // console.log("Duplicate found at index: " + index) //print the duplicate at index
            //Begin copying if the value of next object if not empty
            if(nextObject.temperature != '') {
                currentObject.temperature =  nextObject.temperature
                // console.log("Copied temperature to index: " + nextObject.temperature)
            }  
            if(nextObject.moisture != '') {
                currentObject.moisture =  nextObject.moisture
                // console.log("Copied moisture to index: " + nextObject.moisture)
            }  
            if(nextObject.Battery != '') {
                currentObject.Battery =  nextObject.Battery
                // console.log("Copied Battery to index: " + nextObject.Battery)
            }  
            M2XTrim.splice(index+1,1) //Remove the next object from array
        }
    }
    
})

jsonM2X = JSON.stringify(M2XTrim);

// write to file
fs.writeFile(myArgs[1], jsonM2X, 'utf8', function(err) {
    if(err) console.error(err);

    console.log("File saved successfully")
});