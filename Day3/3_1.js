var fs = require('fs')

fs.readFile('./Day3/input.txt', function(err, data) {
//fs.readFile('./Day3/inputTest.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\r\n")
    var gammadigit = '' //.parseInt(array[0],2)
    var epsilondigit = '' //.parseInt(array[0],2)
    //console.log(`binary = ${array[0]} is digit ${digit}`)

    //for test loop through array 5 times to check each number 12 for regular
    for (i = 0; i < array[0].length; i++){
        // loop through string to check positions
        var cnt0 = 0
        var cnt1 = 0
        for (j = 0; j < array.length; j++){
            if (parseInt(array[j][i]) === 0) {
                cnt0++
            } else {
                cnt1++
            }
        }
        if (parseInt(cnt0) > parseInt(cnt1)){
            gammadigit = gammadigit + '0'
            epsilondigit = epsilondigit + '1'
        } else {
            gammadigit = gammadigit + '1'
            epsilondigit = epsilondigit + '0'
        }
    }
    console.log(`gammadigit = ${gammadigit} = ${parseInt(gammadigit,2)}`)
    console.log(`epsilondigit = ${epsilondigit} = ${parseInt(epsilondigit,2)}`)
    var result = parseInt(gammadigit,2) * parseInt(epsilondigit,2)
    console.log(`result is ${result}`)
})