var fs = require('fs')

//function to find the most common bit return 1 or 0
const findMostCommon = ((arrayToSearch, position) => {
    var cnt0 = 0
    var cnt1 = 0
    for (a = 0; a < arrayToSearch.length; a++) {
        if (parseInt(arrayToSearch[a][position]) === 0){
            cnt0++
        } else {
            cnt1++
        }
    }

    if (parseInt(cnt0) > parseInt(cnt1)) {
        return 0
    } else {
        return 1
    }
})


//function to return new filtered array
const returnArray = ((arrayToFilter, position, toFilter) => {
    var arrayToReturn = []

    for (b = 0; b < arrayToFilter.length; b++){
        if (parseInt(arrayToFilter[b][position]) === parseInt(toFilter)){
            arrayToReturn.push(arrayToFilter[b])
        }
    }

    return arrayToReturn
})

//function to get all the sets of the designated bit need the array, the bit to search for, return the array?


// read in file
//split data into an array
//find Oxygen Generator Rating (OGR)
    //loop through columns of the array
        //get most common digit in each column
        //return new array with just most common digit in column
        //repeat until on 1 item 1 higher than 0 if only 2
//find CO2 Scrubber Rating (CSR)
    //loop through columns of array
        //get least common digit in column
        //get pieces of the array that match that number in that column
        //repeat until 1 item when 2 0 over 1
//find LSR by multiplying OGR * CSR
//return LSR Binary ratting in a decimal




//function to filter results




fs.readFile('./Day3/input.txt', function(err, data) {
//fs.readFile('./Day3/inputTest.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\r\n")
    var mostCommon
    var leastCommon
    var finalOGR
    var finalCSR
    var newArray = []
    var OGRArray = []
    var CSRArray = []
    var result = 0
    OGRArray = array.slice()

    //looping through array string length to know the number of times to filter for OGR
    for (i = 0; i < OGRArray[0].length; i++){
        //find most common
        mostCommon = findMostCommon(OGRArray, i)
        //function to filter out by postion and return new array
        if (OGRArray.length === 2){
            OGRArray = returnArray(OGRArray,i,1)
        } else if  (OGRArray.length === 1) {

        } else {
            OGRArray = returnArray(OGRArray,i,mostCommon)
        }
        

        //console.log(OGRArray)
    }
    finalOGR = OGRArray
    //for CSR
    CSRArray = array.slice()
    //console.log(CSRArray[0].toString().length)
    
    for (j = 0; j < CSRArray[0].length; j++){
        //find most common
        mostCommon = findMostCommon(CSRArray, j)
        if (parseInt(mostCommon) === 0) {
            leastCommon = 1
        } else {
            leastCommon = 0
        }
        
        if (CSRArray.length === 2) {
            CSRArray = returnArray(CSRArray,j,0)
        } else if  (CSRArray.length === 1){

        } else {
            CSRArray = returnArray(CSRArray,j,leastCommon)
        }
        

        //console.log(CSRArray)
    }
    finalCSR = CSRArray
    
    result = parseInt(finalOGR,2) * parseInt(finalCSR,2)

    console.log(`${finalOGR} and ${finalCSR} = ${result}`)
})