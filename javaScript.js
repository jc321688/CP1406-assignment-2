
var random_images_array = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg"];

function getRandomImage(imgAr, path) {
 path = path || 'Gallery/';
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}

function showImage(imgName) {
     var curImage = document.getElementById('currentImg');
     var thePath = 'Gallery/';
     var theSource = thePath + imgName;
	  curImage.src = theSource;
     curImage.alt = imgName;
     curImage.title = imgName;
}

// Contact Form
// check required fields have been set, return true/false depending on these
function checkContactForm() {
	var d = document.getElementById('cmainForm');
    var cErrors = false;
    var cErrorMsg = "";
	//check required fields
    if (firstName.value == "") {//check firstname is given
        cErrorMsg += "Please enter your first name.\n";
        cErrors = true;
	}
	if (lastName.value == ""){//check lastname is given
		cErrorMsg += "Please enter your last name.\n";
        cErrors = true;
	}
	if (cEmail.value == ""){//check email is given
		cErrorMsg += "Please enter your email address.\n";
        cErrors = true;
	} else { //validate email address if given
		var val = /\S+@\S+\.\S+/;
		cTest = val.test(cEmail.value);
		if (!cTest){//if email address not valid
			cErrorMsg += "Please re-enter your email address.\n";
			cErrors = true;
		}
	}
	if (cMobile.value != ""){ //validate mobile number if given
		val = /^0[0-8]\d{8}$/g;
		cTest = val.test(cMobile.value);
		if (!cTest){ //if mobile number not valid
			cErrorMsg += "Please re-enter your mobile number.\n";
			cErrors = true;
		}
	}
    if (cErrors){// if errors exist, popup error message
        window.alert(cErrorMsg);
	}
	return !cErrors;
}
// Benefactor Form
// check required fields have been set, return true/false depending on these
function checkBenefactorForm() {
    var d = document.getElementById('mainForm');
    var errors = false;
    var errorMsg = "";
	
	// basic check required fields
    if (firstname.value == "") {//check firstname is given
        errorMsg += "Please enter your first name.\n";
        errors = true;
	}
	if (lastname.value == ""){//check lastname is given
		errorMsg += "Please enter your last name.\n";
        errors = true;
	}
	if (email.value == ""){//check email is given
		errorMsg += "Please enter your email address.\n";
        errors = true;
	} else { //validate email address
		var val = /\S+@\S+\.\S+/;
		test = val.test(email.value);
		if (!test){//if email address not valid
			errorMsg += "Please re-enter your email address.\n";
			errors = true;
		}
	}
	if (mobile.value == ""){//check mobile number is given
		errorMsg += "Please enter your mobile number.\n";
        errors = true;
	} else { //validate mobile number
		val = /^0[0-8]\d{8}$/g;
		test = val.test(mobile.value);
		if (!test){ //if mobile number not valid
			errorMsg += "Please re-enter your mobile number.\n";
			errors = true;
		}
	}
    if (errors){// if errors exist, popup error message
        window.alert(errorMsg);
	}
	return !errors;
}
function resetForm() { //clear all form values
    var reset = window.confirm('Reset all fields?');
	return reset;
}
