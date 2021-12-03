var fs = require('fs')

//fs.readFile('input.txt', function(err, data) {
fs.readFile('input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\r\n")
    var X = 0
    var Y = 0
    var Total = 0
    var dir
    var distance = 0
    var aim = 0

    for (i = 0; i < array.length; i++){
        var temp = array[i].toString().split(" ")
        dir = temp[0]
        distance = parseInt(temp[1])
        //console.log(`dir = ${dir}, distance= ${distance}`)
        if (dir === 'forward') {
            X = X + distance
            Y = Y + (aim * distance)
            //console.log(`forward - ${X}, ${Y}, ${aim}`)
        } else if (dir === 'up') {
            //Y = Y - distance
            aim = aim - distance
            //console.log(`up ${X}, ${Y}, ${aim}`)
        } else {
            //Y = Y + distance
            aim  = aim + distance
            //console.log(`down ${X}, ${Y}, ${aim}`)
        }
        //console.log(`X = ${X}, Y = ${Y}`)
    }
    Total = X * Y
    console.log(`X = ${X}, Y = ${Y}, Total = ${Total}`)
})
