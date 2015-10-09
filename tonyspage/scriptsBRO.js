//contact form
// check required fields have been set, return true/false depending on these
function checkContactForm() {
	var firstName = document.getElementById("firstname");
	var lastName = document.getElementById("lastname");
	var email = document.getElementById("email");
	var mobile = document.getElementById("mobile");
    var errors = false;
    var errorMsg = "";
	//check required fields
    if (firstName.value == "") {//check firstname is given
        errorMsg += "Please enter your first name.\n";
        errors = true;
	}
	if (lastName.value == ""){//check lastname is given
		errorMsg += "Please enter your last name.\n";
        errors = true;
	}
	if (email.value == ""){//check email is given
		errorMsg += "Please enter your email address.\n";
        errors = true;
	} else { //validate email address if given
		var val = /\S+@\S+\.\S+/;
		test = val.test(email.value);
		if (!test){
			errorMsg += "Please re-enter your email address.\n";
			errors = true;
		}
	}
	if (mobile.value != ""){ //validate mobile number if given
		val = /^0[0-8]\d{8}$/g;
		test = val.test(mobile.value);
		if (!test){
			errorMsg += "Please re-enter your mobile number.\n";
			errors = true;
		}
	}
	// if errors exist, popup error message 
    if (errors){
        alert(errorMsg);
	}
	return !errors;
}	
function checkBenefactorForm() {
    var d = document.getElementById('mainForm');
    var errors = false;
    var errorMsg = "";
	
	// basic check required fields
    if (firstname.value == "") {
        errorMsg += "Please enter your first name.\n";
        errors = true;
	}
	if (lastname.value == ""){
		errorMsg += "Please enter your last name.\n";
        errors = true;
	}
	if (email.value == ""){
		errorMsg += "Please enter your email address.\n";
        errors = true;
	} else { //validate email address
		var val = /\S+@\S+\.\S+/;
		test = val.test(email.value);
		if (!test){
			errorMsg += "Please re-enter your email address.\n";
			errors = true;
		}
	}
	if (mobile.value == ""){
		errorMsg += "Please enter your mobile number.\n";
        errors = true;
	} else { //validate mobile number
		val = /^0[0-8]\d{8}$/g;
		test = val.test(mobile.value);
		if (!test){
			errorMsg += "Please re-enter your mobile number.\n";
			errors = true;
		}
	}
	// if errors exist, popup error message 
    if (errors){
        alert(errorMsg);
	}
	return !errors;
}
function resetForm() { //clear all form values
    var reset = confirm('Reset all fields?');
    if (reset) {
        document.mainForm.firstname.value == "";
        document.mainForm.lastname.value == "";
        document.mainForm.email.value == "";
        document.mainForm.mobile.value == "";
		document.mainForm.comments.value == "";
	}	
	return reset;
}


    