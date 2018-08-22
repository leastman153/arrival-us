//arrival-us website
//
//       Authors:Dylan Jones-Miller
//       Date: 8.20.18
//
//Filename: donate.js

var formValidity = true;

function removeInputElements() {
    var emptyBoxes = document.getElementsByTagName("input");
     for (var i = 0; i < emptyBoxes.length; i++) {
         emptyBoxes[i].selectedIndex = -1;
     }
    
}

//removing defaults for select list
function removeSelectDefaults() {
     var emptyBoxes = document.getElementsByTagName("select");
     for (var i = 0; i < emptyBoxes.length; i++) {
         emptyBoxes[i].selectedIndex = -1;
     }
 }


function validateDeliveryDate() {
    var inputElements = document.querySelectorAll(".formRow input");
    var selectElements = document.querySelectorAll(".formRow select");
    var errorDiv = document.getElementsByClassName("errorMessage");
    var fieldsetValidity = true;
    var elementCount = selectElements.length;
    var inputCount = inputElements.length;
    var currentElement;
    try {

        // loop through the select fields looking for blanks
        for (var i = 0; i < elementCount; i++) {
            currentElement = selectElements[i];
            //blanks
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            //not blanks
            else {
                currentElement.style.background = "white";
            }
        }

            //   for inputs
            for (var i = 0; i < elementCount; i++) {
                currentElement = inputElements[i];
                //blanks
                if (currentElement.selectedIndex === -1) {
                    currentElement.style.border = "1px solid red";
                    fieldsetValidity = false;
                }
                //not blanks
                else {
                    currentElement.style.background = "white";
                }

            }
         // action for invalid field set
        if (fieldsetValidity === false) {
            throw "Please specify a Delivery Date."
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    }
       
     catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

function validateForm(evt) {
    //    prevent form default behavior submit
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
    validateDeliveryDate();

    if (formValidity === true) { //form is valid
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none"
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML =
            "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}


//creating a function for event listeners
//event handler will be validateForm
function createEventListeners() {
    var submit = document.getElementById("donate");
    if (submit.addEventListener) {
        submit.addEventListener("click", validateForm, false);
    } else if (submit.attachEvent) {
        submit.attachEvent("onclick", validateForm);
    }
}

function setUpPage() {
    removeSelectDefaults();
    removeInputElements();
    createEventListeners();
}



//page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
