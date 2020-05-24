'use strict'; 

const form = document.getElementById('formRegister');
const formLogin = document.getElementById('formLogin');
const formSearch = document.getElementById('formSearch');


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
    

//email validator    
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Mandatory field";
        acumErrores ++;
    } else if(!emailValidator(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Email format wrong";
		acumErrores ++;
	}

    //password validator
    if(inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Mandatory field";
        acumErrores ++;
    }

    //password repeat validator
     if(inputPassword.value !== inputConfirmPassword.value) {
        inputConfirmPassword.classList.add("is-invalid");
        document.getElementById("errorConfirmPassword").textContent = "Password must be the same";
        acumErrores ++;
    } 

    //Region/Province validator

    if(inputProvince.value == "Choose...") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Mandatory field";
        acumErrores ++;
    }

    //Check validator
    if(!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Please, accept it";
        acumErrores ++;
    }
    if (acumErrores > 0){
        return false;
    }else{
        return true;
    }
}

function loginValidate() {

	var acumErrores = 0;
	
    formLogin.classList.remove('is-invalid');
    
	var inputEmailLogin = document.getElementById('inputEmailLogin');
    var inputPasswordLogin = document.forms["myForm"]["inputPasswordLogin"];


    //email validator    
	if(inputEmailLogin.value == "") {
		inputEmailLogin.classList.add("is-invalid");
		document.getElementById("errorEmailLogin").textContent = "Mandatory field";
        acumErrores ++;
    } else if(!emailValidator(inputEmailLogin.value)){
		inputEmailLogin.classList.add("is-invalid");
		document.getElementById("errorEmailLogin").textContent = "Email format wrong";
		acumErrores ++;
	}

    //password validator
    if(inputPasswordLogin.value == "") {
        inputPasswordLogin.classList.add("is-invalid");
        document.getElementById("errorPasswordLogin").textContent = "Mandatory field";
        acumErrores ++;
    }
    if (acumErrores > 0){
        return false;
    }else{
        return true;
    }
}

function searchValidate() {
    var acumErrores = 0;

    if ((inputSearch.value =="")||(inputSearch.value.length<3) ){
        inputSearch.classList.add("is-invalid");
        alert("Enter a word longer than 3 characters");
        acumErrores ++;
    }

    if (acumErrores > 0){
        return false;
    }else{
        return true;
    }
}

form.addEventListener("blur", (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true); 



function emailValidator(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

