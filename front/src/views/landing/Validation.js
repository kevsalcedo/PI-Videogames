const Validation = (userData) => {

    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = "No es un email valido"
    }

    if(userData.email === ""){
        errors.email = "El campo no puede estar vacio"
    }

    if(userData.email.length > 35){
        errors.email = "El email debe tener menos de 35 caracteres"
    }

    if(!/\d/.test(userData.password)){
        errors.password = "Debe contener al menos un numero"
    }

    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

export default Validation;