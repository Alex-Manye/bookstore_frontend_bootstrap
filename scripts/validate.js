'use strict';

/* L'objectiu d'aquest apartat serà validar els formularis de la teva web amb javascript. 
- Validar el formulari de cerca:
●	Condicions: La paraula introduïda haurà de ser obligatòria i contenir més de 3 caràcters.

- Validar el formulari de login (haurà de tenir un camp email i un altre de contrasenya):
●	Condicions: Els camps email i contraseña hauran de ser obligatoris. El email haurà de seguir el format estàndard dels email (Hi ha molta documentació)

- Validar el formulari de registre (com a mínim haurà de tenir un camp email, contrasenya, repetició de contrasenya i un desplegable de província). 
●	Les condicions de validació les deixem a les vostres mans.

Nota: els formularis no es validen amb ALERTS!! Pista: utiliza la clase “is-invalid”amb Bootstrap 4.
 */


const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('inputEmail');

    //will get the value of the "inputPassword" element within the "myForm" <form>
    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputConfirmPassword = document.forms["myForm"]["inputConfirmPassword"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
    var gridCheck = document.forms["myForm"]["gridCheck"];
    

    console.log(inputEmail)
    console.log(inputPassword)
    console.log(inputConfirmPassword)
    console.log(inputProvince)
    console.log(gridCheck)

//email validator    
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Mandatory field";
        acumErrores ++;
    }else if(!emailValidator(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Email format wrong";
		acumErrores ++;
	}

    //password validator
    if(inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Mandatory field";
        acumErrores ++;

    //password repeat validator
    if(inputPassword.value !== InputConfirmPassword.value) {
        inputConfirmPassword.classList.add("is-invalid");
        document.getElementById("errorConfirmPassword").textContent = "Mandatory field";
        acumErrores ++;
    }

    //Region/Province validator

    if(inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Mandatory field";
        acumErrores ++;
    }

    if(!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "I accept";
        acumErrores ++;
    }

    if (acumErrores > 0){
        return false;
    }else{
        return true;
    }
    }
    console.log(acumErrores)
}


form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function emailValidator(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

