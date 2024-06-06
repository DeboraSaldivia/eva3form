function validar() {

    var retorno_nombre = validar_nombre();
    var retorno_comuna = validar_comuna();

    var retorno_correo = validar_correo();
    var retorno_contra = validar_contra();
    var retorno_contra2 = validar_contra2();
    var retorno_telefono = validar_telefono();
    var retorno_direccion = validar_direccion();
    var retorno_URL = validar_URL();
    var retorno_pasatiempo = validar_pasatiempo();



    console.log("retorno_nombre: ", retorno_nombre);
    console.log("retorno_comuna: ", retorno_comuna);

    console.log("retorno_correo: ", retorno_correo);
    console.log("retorno_contra: ", retorno_contra);
    console.log("retorno_contra2: ", retorno_contra2);
    console.log("retorno_telefono: ", retorno_telefono);
    console.log("retorno_direccion: ", retorno_direccion);
    console.log("retorno_URL", retorno_URL)
    console.log("retorno_pasatiempo: ", retorno_pasatiempo);

    return false;

    //return retorno_nombre && retorno_apellido && retorno_comuna && retorno_hobby && retorno_correo && retorno_contra && retorno_telefono && retorno_url;
}

function validar_pasatiempo() {
    var pasatiempo = document.getElementById("input-pasatiempo").value.split(",");
    var div_error_pasatiempo = document.getElementById("error-pasatiempo");
    if (pasatiempo.length < 2) {
        div_error_pasatiempo.innerHTML = "Ingrese 2 pasatiempos o aficiones separados por comas(Por ejemplo: nadar, pintar)";
        div_error_pasatiempo.className = "text-danger small mt-1";
        return false;
    }
    div_error_pasatiempo.innerHTML = '';
    return true;
}



function validar_URL() {
    var url = document.getElementById("input-url").value;
    var errorElement = document.getElementById("error-url");
    var valido = false;

    if (url.length >= 4 && url.substring(0, 4) === "www.") {
        for (var i = 4; i < url.length; i++) {
            if (url[i] === '.') {
                valido = true;
                break;
            }
        }
    }

    if (valido) {
        errorElement.textContent = "URL válida";
        errorElement.className = "success";
    } else {
        errorElement.textContent = "URL no válida";
        errorElement.className = "error";
    }
}

function validar_telefono() {
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value;

    var valor_num= fono.slice(1);

    if (fono == "") {
        div_error_fono.innerHTML = "El telefono es obligatorio";
        div_error_fono.className = "text-danger small mt-1";
        return false;

    } else if (fono.length > 15) {
        div_error_fono.innerHTML = "El telefono no puede tener mas de 15 caracteres";
        div_error_fono.className = "text-danger small mt-1";
        return false;

    } else if (fono[0] !== "+") {
        div_error_fono.innerHTML = "Se necesita agregar un +";
        div_error_fono.className = "form-text text-danger";

        return false;
    } else if (!isNaN(valor_num)) {
        div_error_fono.innerHTML = "El teléfono es válido";
        div_error_fono.className = "form-text text-success"
        return true;

    } else {
        div_error_fono.innerHTML = "El numero de telefono solo debe contener numeros, no letras ni espacios";
        div_error_fono.className = "form-text text-danger";
        return true;

    }
}


function validar_direccion() {
        var input_direccion = document.getElementById("input-direccion");
        var div_error_direccion = document.getElementById("error-direccion");
        var direccion = input_direccion.value;
        if (direccion == "") {
            div_error_direccion.innerHTML = "La direccion es obligatorio";
            div_error_direccion.className = "text-danger small mt-1";
            return false;
        } else {
            div_error_direccion.innerHTML = "";

            return true;
        }
    }




    function validar_correo() {
        var input_email = document.getElementById("input-email");
        var div_error_email = document.getElementById("error-email");
        var correo = input_email.value;
        // indexOf retorna el indice de la posicion en la que se encuentra "@"
        var pos_arroba = correo.indexOf("@");
        // lastIndexOf retorna el indice de la ultima posicion en la que se encuentra "."
        var pos_punto = correo.lastIndexOf(".");
        // split crea un array de subcadenas resultantes de la division una principal
        var arr_correo = correo.split(".");
        var extension = arr_correo[arr_correo.length - 1];
        if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3)) {
            div_error_email.innerHTML = "";
            return true;
        } else {
            div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto (Por ejemplo @gmail.com)";
            div_error_email.className = "text-danger small mt-1";
            return false;
        }
    }

    function validar_contra() {
        var input_pass = document.getElementById("input-pass");
        var pass = input_pass.value;
        var div_error_pass = document.getElementById("error-pass");
        var letras = false;
        var numero = false;


        for (var i = 0; i < pass.length; i++) {

            console.log("pass [i]", pass[i])
            if (parseInt(pass[i])) {
                numero = true;
            } else if (typeof pass[i] === "string") {
                letras = true;
            }
        }
        console.log("letras", letras)
        console.log("numero", numero)


        if (pass == "") {
            div_error_pass.innerHTML = "La contraseña es obligatoria";
            div_error_pass.className = "text-danger small mt-1";
            return false;

        } else if (pass.length < 3 || pass.length > 6) {
            div_error_pass.innerHTML = "la contraseña debe tener al menos 3 caracteres y menor que 6 caracteres digitos";
            div_error_pass.className = "text-danger small mt-1";
            return false;


        } else if (letras == false) {
            div_error_pass.innerHTML = "La contraseña necesita una letra minimo";
            div_error_pass.className = "text-danger small mt-1";
            return false;


        } else if (numero == false) {
            div_error_pass.innerHTML = "La contraseña necesita un numero minimo";
            div_error_pass.className = "text-danger small mt-1";
            return false;
        }
        else {
            div_error_pass.innerHTML = "";
            return true;
        }
    }

    function validar_contra2() {
        var input_pass = document.getElementById("input-pass");
        var pass = input_pass.value;
        var input_pass2 = document.getElementById("input-pass2");
        var pass2 = input_pass2.value;
        var div_error_pass2 = document.getElementById("error-pass2");
        if (pass2 == "") {
            div_error_pass2.innerHTML = "La confirmacion de contraseña es obligatoria";
            div_error_pass2.className = "text-danger small mt-1";
            return false;
        }
        else if (pass2 != pass) {
            div_error_pass2.innerHTML = "La contraseña no coincide";
            div_error_pass2.className = "text-danger small mt-1";
            return false;

        } else {
            div_error_pass2.innerHTML = "";
            return true;
        }
    }




    function validar_comuna() {
        var select_comuna = document.getElementById("select-comuna");
        var div_error_comuna = document.getElementById("error-comuna");
        var comuna = select_comuna.value;
        if (comuna == "default") {
            div_error_comuna.innerHTML = "Debe seleccionar una comuna";
            div_error_comuna.className = "text-danger small mt-1";
            return false;
        } else {
            div_error_comuna.innerHTML = "";
            return true;
        }
    }



    function validar_nombre() {
        var input_nombre = document.getElementById("input-nombre");
        var div_error_nombre = document.getElementById("error-nombre");
        var nombre = input_nombre.value;
        if (nombre == "") {
            div_error_nombre.innerHTML = "El nombre es obligatorio";
            div_error_nombre.className = "text-danger small mt-1";
            return false;
        } else if (nombre.length > 20) {
            div_error_nombre.innerHTML = "El nombre no puede tener mas de 20 caracteres";
            div_error_nombre.className = "text-danger small mt-1";
            return false;
        } else {
            div_error_nombre.innerHTML = "";
            return true;
        }

    }
