function formValues() {
				
    var email =
        document.forms.RegForm.EMail.value;
    var password =
        document.forms.RegForm.Password.value;


    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid Email address");
        email.focus();
        return false;
    }
    
    if (password == "") {
        alert("Please enter your Password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Invalid Password");
        password.focus();
        return false;
    }

    return true;
}




function formValues() {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var password =
        document.forms.RegForm.Password.value;
    var confirmpassword =
        document.forms.RegForm.confirmPassword.value;    


    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regName = /\d+$/g;								            // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please Enter your name properly.");
        name.focus();
        return false;
    }
    
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid Email address");
        email.focus();
        return false;
    }
    
    if (password == "") {
        alert("Please enter your Password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 characters long");
        password.focus();
        return false;
    }

if (password != confirmpassword) {
        alert("Please repeat the Password");
        confirmpassword.focus();
        return false;
    }

    return true;
}

$('#image').click(function () {
    $('#myfile').click()
})