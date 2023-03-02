const handleSubmit = (e) => {
    e.preventDefault()
    const errors = []

    for(let element of e.target){
        if(element.required){
            switch(element.type){
                case 'email':
                    if(!validateEmail(element.value))
                        errors.push(element)
                    break;
                case 'text':
                    validateName(element.value)
                    break;
                case 'password':
                    validatePassword(element.value)
                    break;
            }

        }
        
    }

    console.log("submitted")
}


const showPassword = (e) =>{
    const password = document.getElementById("password")
    if(password.type === "password")
        password.type = "text"
else
    password.type = "password"

}

const validateName = (value) =>{
    const regEx = /^[A-Ö]([a-öA-Ö\u00C0-\u017F]+(([', -][a-zA-Z ])?[a-zA-Z]*)){1,}$/;
    if(!regEx.test(value)){
        console.log("name NOT valid")
        return false
    }
        
    console.log("name valid")
    return true
}

const validateEmail = (value) =>{
    const regEx = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if(!regEx.test(value)){
        console.log("Email NOT valid")
        return false
    }
        
    console.log("Email valid")
    return true
}

const validatePassword = (value) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(!regEx.test(value)){
        console.log("password NOT valid")
        return false
    }
        
    console.log("password valid")
    return true
}



const validate = (e) => {
    switch(e.target.type){
        case 'email':
            validateEmail(e.target.value)
            break;
        case 'text':
            validateName(e.target.value)
            break;
        case 'password':
            validatePassword(e.target.value)
            break;
    }
}