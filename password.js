console.log("Welcome the password validation tool")


const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


reader.question("Please enter password to be validated: ", function(input){
	let password = input
	let hasCapital = false
    let hasNumber = false
    let hasSpecialChar = false

    if (password.length >= 10){
        console.log('Your password is long enough')
    } else {
        console.log('Your password is too short')
    } 
    
	// This line closes the connection to the command line interface.
	reader.close()

})