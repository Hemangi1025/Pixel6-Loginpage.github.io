//Validate name function
var name = document.getElementById("name").value;
    function nameCheck() {

        s = document.getElementById("name").value;
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        const wordCount = (s.split(' ').length);
        //console.log(wordCount);
        
        if (wordCount < 2) {
            document.getElementById("nameError").innerHTML = "Full name must contain atleast 2 words";
            
        }

        else if (wordCount >= 2) {
            var name = document.getElementById("name").value;
            var split;
            split = name.split(" ");
            
            for(var i=0; i<split.length; i++){
                temp = split[i];
                //var len = temp.length;
                
                      if(temp.length < 4){
                        document.getElementById("nameError").innerHTML += temp + " must contain minimum 4 characters!! ";
                        
                    }
            }
          
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
    else {
        document.getElementById("submit");
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

function enablecheck(){
    document.getElementById("check").disabled = false;
}

function Check(){
    var e1 = document.getElementById("nameError").innerText;
    var e2 = document.getElementById("emailError").innerText;
    var e3 = document.getElementById("mobileError").innerText;
    
        if((e1 == "") && (e2 == "") && (e3 == "")){
            document.getElementById("submit").disabled = false;
        }
        else{
            alert("Fill the form correctly without any error");
            document.getElementById("form").reset();
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




























