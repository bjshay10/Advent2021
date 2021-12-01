var fs = require('fs')

fs.readFile('input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\r\n")
    var num1 = 0
    var num2 = 0
    var num3 = 0
    var sum = 0
    var prevSum = 0
    var countIncrease = 0
    //var sumArray
    
    for (i=0; i<array.length-1; i++){
        num1 = parseInt(array[i])
        num2 = parseInt(array[i+1])
        num3 = parseInt(array[i+2])
        sum = num1 + num2 + num3
        //sumArray.push(sum)
        if (i === 0){
            prevSum = sum
        } else {
            
            if (parseInt(sum) > parseInt(prevSum)){
                countIncrease++                
            }
            
            prevSum = sum
        }
        
    }

    console.log(countIncrease)
})