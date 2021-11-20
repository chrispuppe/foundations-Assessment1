console.log("Welcome the password validation tool")


const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


reader.question("Please enter password to be validated: ", function(input){
	let password = input
    let hasLower = false
	let hasUpper = false
    let hasNumber = false
    let hasSpecialChar = false

    if (password.length >= 10){
        console.log('Your password is long enough')
    } else {
        console.log('Your password is too short')
    } 

    let spChars =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

    if (spChars.test(password)){
        hasSpecialChar = true
    }
    
    for (i = 0; i < password.length; i++){
        if (password[i] === password[i].toLowerCase() && !spChars.test(password) && isNaN(parseInt(password[i]))){
            hasLower = true
        }
        if (password[i] === password[i].toUpperCase()&& !spChars.test(password) && isNaN(parseInt(password[i]))){
            hasUpper = true
        }
        if (!isNaN(parseInt(password[i]))){
            hasNumber = true
        }
        // console.log(parseInt(password[i]))
    }
    console.log(hasNumber + "" + hasSpecialChar + "" + hasLower + "" + hasUpper)

	// This line closes the connection to the command line interface.
	reader.close()

})