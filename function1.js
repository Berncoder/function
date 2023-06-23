//variables
//declare a var, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Halloween'
favHoliday= favHoliday.toUpperCase()
console.log(favHoliday)

//declare a variable, assign it a string, alert the last three characters in the string (use your google-fu and the MDN)

let favPowerRangersSeries= 'Alien Rangers'
alert ( favPowerRangersSeries.slice(-3) )

//*functions 
//create a function that takes in 5 numbers. subtract all five from 100. alert the absolute value of the difference. call the function
function minusFiveAndAbs(n1, n2, n3, n4, n5) {
    let difference = 100 - n1 - n2  - n3 - n4 - n5
    alert( Math.abs(difference) )
}
minusFiveAndAbs(27, 83, 42, 1, 5)


//create a function that takes in 3 numbers. console log lowest and highest values. call the function

function logHighAndLow(n1, n2, n3) {
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)
    console.log( `The lowest num is ${min} and the highest num is ${max}`)
}
logHighAndLow(100, 50, 25)

// conditionals
// create a function that returns heads or tails randomly and as fairly as possible. call the function

function headsOrTails(){
    let result = Math.random()
    if (result < .5) {
        return 'heads'
    } else {
        return 'tails'
    }
}
console.log ( headsOrTails() )
// loops
//create a function that takes in a number. 
//console log the result of heads or tails using the previous function x times where x is the number passed in the function. 
//call the function

function flipFlipFlipadelphia(n){
    for(let i = 1; i <=n; i++){
        let result = headsOrTails()
        console.log(result)
    }
}
flipFlipFlipadelphia(1)