// Create event listener for window load event to invoke forLoad() function
if(window.addEventListener) {
  window.addEventListener("load", forLoad);
} else if (window.attachEvent) {
  window.attachEvent("onload", forLoad);
}

// Invoked when page is fully loaded
function forLoad() {
  // Make sure Flat Rate button is checked, hide email address input, call createEventListeners() to set up all necessary event listeners
  document.getElementById("flatRate").checked = true;
  document.getElementById("email").style.display = "none";
  createEventListeners();
}

// Create all necessary event listeners
function createEventListeners() {
  var payment = document.getElementById("payment");
  var newsletter = document.getElementById("newsletter");
  // Invoke
  if(payment.addEventListener) {
    payment.addEventListener("submit", validate);
  } else if(payment.attachEvent) {
    payment.attachEvent("onsubmit", validate);
  }
  if(newsletter.addEventListener) {
    newsletter.addEventListener("change", addEmail);
  } else if(email.attachEvent) {
    newsletter.attachEvent("onchange", addEmail);
  }
}

function validate(event) {
  if(event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
  var valid = true;
  var errorText = document.getElementById("errorMsg");
  var inputElements = document.querySelectorAll(".formRow input");
  var selectElements = document.querySelectorAll(".formRow select");
  var messageBox = document.getElementById("messageBox");
  var currentElement;
  try {
    for(var i = 0; i < inputElements.length; i++) {
      currentElement = inputElements[i];
      if(currentElement.id === "email" && currentElement.style.display === "none") {
        continue;
      }
      if(currentElement.value === "" || currentElement.value === currentElement.placeholder) {
        currentElement.style.background = "rgb(255, 233, 233)";
        currentElement.style.border = "2px solid red";
        valid = false;
      } else {
        currentElement.style.background = "white";
        currentElement.style.border = "white";
      }
    }
    for(var i = 0; i < selectElements.length; i++) {
      currentElement = selectElements[i];
      if(currentElement.selectedIndex === 0) {
        currentElement.style.background = "rgb(255, 233, 233)";
        currentElement.style.border = "2px solid red";
        valid = false;
      } else {
        currentElement.style.background = "white";
        currentElement.style.border = "white";
      }
    }
    if(messageBox.value === "") {
      messageBox.style.background = "rgb(255, 233, 233)";
      messageBox.style.border = "2px solid red";
      valid = false;
    } else {
      messageBox.style.background = "white";
      currentElement.style.border = "white";
    }
    if(!valid) {
      scroll(0, 100);
      throw "Please enter all information";
    } else {
      event.target.submit();
    }
  } catch(msg) {
    errorText.style.display = "block";
    errorText.innerHTML = msg;
  }
}

function addEmail() {
  var newsletter = document.getElementById("newsletter");
  var email = document.getElementById("email");
  if(newsletter.checked === true) {
    email.style.display = "block";
  } else {
    email.style.display = "none";
  }
}

function sumDigits(numStr) {
    var digitTotal = 0;
    for (var i = 0; i < numStr.length; i++) {
        digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
}

function luhn(idNum) {
    var string1 = "";
    var string2 = "";

    // Retrieve the odd numbered digits
    for (var i = idNum.length - 1; i >= 0; i -= 2) {
        string1 += idNum.charAt(i);
    }
    // Retrieve the even numbered digits and double them
    for (var i = idNum.length - 2; i >= 0; i -= 2) {
        string2 += 2 * idNum.charAt(i);
    }

    // Return whether the sume of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;
}
