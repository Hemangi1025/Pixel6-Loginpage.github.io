//Validate name function
var name = document.getElementById("name").value;
function nameCheck() {

    var letters = /^[A-Za-z]+$/;
    if(name==""){
        document.getElementById("nameError").innerHTML = "Please fill your name";
        //return false;
    }
   
    if (name.length < 9) {
        document.getElementById("nameError").innerHTML = "Name must contain minimum two words with minimum 4 characters each";
    }
    
}

//Validate Email function
function emailCheck() {
   

    var email = document.getElementById("email").value;
    if (email.indexOf('@') <= 0) {
        document.getElementById("emailError").innerHTML = "Invalid @ position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 4) != '.')) {
        document.getElementById("emailError").innerHTML = "Invalid . position";
        return false;
    }

}



//mobile validation and reconizing the sim provider
function providerCheck() {
    var p1 = document.getElementById("p1").value;

    if (p1 >= 621 && p1 <= 799) {

        document.getElementById("jio").style.display = "block";
       

    }

    else if (p1 >= 801 && p1 <= 920) {

        document.getElementById("idea").style.display = "block";
      
    }

    else if (p1 >= 921 && p1 <= 999) {

        document.getElementById("vodafone").style.display = "block";
        
    }

    else {
        document.getElementById("mobileError").innerText = "Invalid Number";
    }
}


var otpSend;
function msg() {
    var str = document.getElementById("name").value;//Displaying message to user
    var fname = str.split(" ", 1);
    document.getElementById("fname").innerText = fname;
    document.getElementById("form").style.opacity = "0.1";
    document.getElementById("msg").style.display = "block";

    //Sending otp to console
    var fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
    console.log(fourdigitsrandom);
    otpSend = fourdigitsrandom;

}

// Validating otp
function otpCheck() {
    var otpReceive = document.getElementById("otp").value;


    if (otpReceive == otpSend) {

        document.getElementById("alert").style.display = "block";//Success validation msg and redirecting ti home page
        document.getElementById("msg").style.display = "none";
    }
    else {

        document.getElementById("msg").reset();

        if (otpReceive == otpSend) {
            document.getElementById("alert").style.display = "block";
        }

        else {
            window.location.href = "error.html";//OTP failed.Redirecting to error 404 page
        }
    }

}




























