// The Password Validator: You are building a password validation feature.Create a function that checks if a given password 
// meets the following criteria: at least 8 characters longcontains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(password) {
    const errors = []

    if (!password || typeof password !== "string") {
        return {
            isvalid: false,
            errors: ["Password is required"]
        }
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one digit");
    }

    return{
        isvalid: errors.length === 0,
        errors,
                
    }
}

password = "Hello2kaaluji"
console.log(passwordValidator(password));
