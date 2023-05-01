// This is a JavaScript code for a registration form validation. It includes the following functionalities:

// It selects the form and input fields from the HTML document.
// It defines a function isEmail() that validates if the entered email address is valid or not.
// It adds an event listener to the form that calls the validate() function when the form is submitted.
// The validate() function gets the values of all input fields and validates them one by one using if-else statements.
// If an input field is not valid, it calls the setErrorMsg() function that changes the class of the parent element to 'form-control error' and displays an error message in the small element.
// If an input field is valid, it calls the setSuccessMsg() function that changes the class of the parent element to 'form-control success'.
// The successMsg() function checks if all input fields are valid by iterating over the input fields and checking their class. If all input fields have the class 'form-control success', it calls the sendData() function that displays an alert and a success message using SweetAlert and redirects to a new page.
// Overall, this code provides a basic form validation functionality for a registration form. However, it can be further improved by adding more validations, such as checking for strong passwords or checking if the phone number is valid .

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//isEmail function
const isEmail = (emailValue) => {
  var atSymbol = emailValue.indexOf("@");
  var dot = emailValue.lastIndexOf("."); 
  
  if((atSymbol < 1)){return false;}
  if((dot <= atSymbol + 3)){return false;}                  //write atleast 3 char after the "@" symbol 
  if((dot === emailValue.length - 1)){return false;}
  
  return true;
}

//add event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});


//defining  sendData function
const sendData=(usernameValue,successRate,count)=>{
  if(successRate===count){
    alert("Registration Successful");
    swal("Welcome! "+ usernameValue,"Registration Successful","success");
   // location.href=`demo.html?username=${usernameValue}`
  }
}


//defining successMsg function
const successMsg=(usernameValue)=>{

  let formCon= document.getElementsByClassName("form-control");
  var count=formCon.length-1;   //formCon will return an array so count will be no. of input fields
  for(var i=0; i<formCon.length; i++){
    if(formCon[i].className === "form-control success"){
        var successRate=0+i;                    //if successRate and count are equal that means all the input fields are green
        console.log(successRate);
        sendData(usernameValue,successRate,count);
    }else{
      return false;
    }
  }

}

//define the validate function
const validate = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();

  //validate username
  if (usernameValue === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameValue.length <= 2) {
    setErrorMsg(username, "username should be minimum 3 characters ");
  } else {
    setSuccessMsg(username);
  }

  //validate email
  if (emailValue === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorMsg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }


  //valodate phone
  if (phoneValue === "") {
    setErrorMsg(phone, "phone number cannot be blank");
  } else if ((phoneValue.length != 10 )) {
    setErrorMsg(phone, "Not a valid phone number");
  } else {
    setSuccessMsg(phone);
  }


   //valodate password
   if (passwordValue === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if ((passwordValue.length <= 7 )) {
    setErrorMsg(password, "Minimum 8 characters");
  } else {
    setSuccessMsg(password);
  }


  //valodate cpassword
  if (cpasswordValue === "") {
    setErrorMsg(cpassword, "password cannot be blank");
  } else if (( cpasswordValue != passwordValue)) {
    setErrorMsg(cpassword, "Confirm password does not match your password");
  } else {
    setSuccessMsg(cpassword);
  }

  //declaring successMsg function
  successMsg(usernameValue);

}
function setErrorMsg(input, errormsgs){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText=errormsgs;
}


function setSuccessMsg(input){
  const formControl=input.parentElement;
  formControl.className="form-control success";
}










