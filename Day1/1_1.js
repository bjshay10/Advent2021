var fs = require('fs')

fs.readFile('input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\r\n")
    var a = 0
    var b = 0
    var count = 0
    for (i=0; i<array.length; i++){
        //console.log(i)
        if (parseInt(i) === 0){
            a = array[i]
            console.log('Starting')
        } else {
            b = array[i]  
            console.log(`a = ${a}, b = ${b}`)
            if (parseInt(b) > parseInt(a)) {
                count++
            }
            a = b
        }
    }
    console.log(`Final count ${count}`)
})
