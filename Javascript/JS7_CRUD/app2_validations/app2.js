// document.getElementById("addUserBtn").setAttribute("disabled",true)
// document.getElementById("addUserBtn").removeAttribute("disabled")

function validateForm() {
    var firstNameInput = document.getElementById("firstName").value;
        if (firstNameInput.length >= 6) {
            document.getElementById("addUserBtn").removeAttribute("disabled");
            document.getElementById("firstNameError").style.display = "none"

        } else {
        document.getElementById("firstNameError").style.display = "block"
        document.getElementById("addUserBtn").setAttribute("disabled", true);
    }

    var lastNameInput = document.getElementById("lastName").value;
    if (lastNameInput.length >= 5) {
        document.getElementById("addUserBtn").removeAttribute("disabled");
        document.getElementById("lastNameError").style.display = "none"
    } else {
        document.getElementById("lastNameError").style.display = "block"
        document.getElementById("addUserBtn").setAttribute("disabled", true);
    }

    var emailInput = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (emailRegex.test(emailInput)) {
        document.getElementById("addUserBtn").removeAttribute("disabled");
        document.getElementById("emailError").style.display = "none"
    } else {
        document.getElementById("emailError").style.display = "block"
        document.getElementById("addUserBtn").setAttribute("disabled", true);
    }

    var mobileInput = document.getElementById("mobile").value;
    var phoneRegex = /^[0-9]{10}$/;

    if(phoneRegex.test(mobileInput)){
        document.getElementById("addUserBtn").removeAttribute("disabled");
        document.getElementById("mobileError").style.display = "none"
    }else{
        document.getElementById("mobileError").style.display = "block"
        document.getElementById("addUserBtn").setAttribute("disabled", true);
    }

}