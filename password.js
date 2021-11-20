console.log("Welcome the password validation tool")
console.log(`██████╗  █████╗ ███████╗███████╗██╗    ██╗ ██████╗ ██████╗ ██████╗ 
██╔══██╗██╔══██╗██╔════╝██╔════╝██║    ██║██╔═══██╗██╔══██╗██╔══██╗
██████╔╝███████║███████╗███████╗██║ █╗ ██║██║   ██║██████╔╝██║  ██║
██╔═══╝ ██╔══██║╚════██║╚════██║██║███╗██║██║   ██║██╔══██╗██║  ██║
██║     ██║  ██║███████║███████║╚███╔███╔╝╚██████╔╝██║  ██║██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝ 
 █████╗ ███╗   ██╗ █████╗ ██╗  ██╗   ██╗███████╗███████╗██████╗    
██╔══██╗████╗  ██║██╔══██╗██║  ╚██╗ ██╔╝╚══███╔╝██╔════╝██╔══██╗   
███████║██╔██╗ ██║███████║██║   ╚████╔╝   ███╔╝ █████╗  ██████╔╝   
██╔══██║██║╚██╗██║██╔══██║██║    ╚██╔╝   ███╔╝  ██╔══╝  ██╔══██╗   
██║  ██║██║ ╚████║██║  ██║███████╗██║   ███████╗███████╗██║  ██║   
╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝   
███████╗ ██████╗  ██████╗  ██████╗  ██████╗  ██████╗  ██████╗      
╚════██║██╔═████╗██╔═████╗██╔═████╗██╔═████╗██╔═████╗██╔═████╗     
    ██╔╝██║██╔██║██║██╔██║██║██╔██║██║██╔██║██║██╔██║██║██╔██║     
   ██╔╝ ████╔╝██║████╔╝██║████╔╝██║████╔╝██║████╔╝██║████╔╝██║     
   ██║  ╚██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝     
   ╚═╝   ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝      
                                                                   `)


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
    let longerThanTen = false

    if (password.length >= 10){
        longerThanTen = true
    } 

    let spChars =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

    if (spChars.test(password)){
        hasSpecialChar = true
    }
    
    for (i = 0; i < password.length; i++){
        if (password[i] === password[i].toLowerCase() && !spChars.test(password[i]) && isNaN(parseInt(password[i]))){
            hasLower = true
        }
        if (password[i] === password[i].toUpperCase() && !spChars.test(password[i]) && isNaN(parseInt(password[i]))){
            hasUpper = true
        }
        if (!isNaN(parseInt(password[i]))){
            hasNumber = true
        }
    }

    if (longerThanTen){
        console.log("Your password is long enough.")
    } else {
        console.log("Your password is too short.")
    }
    if (hasLower){
        console.log("Your password has a lowercase letter.")
    }
	if (hasUpper){
        console.log("Your password has an uppercase letter.")
    }
    if (hasNumber){
        console.log("Your password has a number.")
    }
    if (hasSpecialChar){
        console.log("Your password has a special character.")
    }
    

	// This line closes the connection to the command line interface.
	reader.close()

})