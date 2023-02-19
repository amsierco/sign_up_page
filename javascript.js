//Matching passwords
function checkPasswordMatch(){
    let password_1 = document.getElementById("password").value;
    let password_2 = document.getElementById("confirm-password").value;
    if(password_1 != password_2){
        password_1 = null;
        password_2 = null;
        return false;
    }
    else
    {
        return true;
    }
}

//Adds submit button functionality
const submit_btn = document.querySelector(".btn")
submit_btn.addEventListener("click", () => {
    validateForm();
});

//Validate Form
function validateForm(){
    let form_array = document.querySelectorAll(".input input");

    //Initially reset visual properties
    for(let i=0; i<form_array.length; i++){
        form_array[i].style.borderColor= "#000";
    }

    //Checks Validity
    for(let i=0; i<form_array.length; i++){
        //Empty field
        if(form_array[i].value == ""){
            form_array[i].style.borderColor= "red";
        }
        //Valid format
        else if(form_array[i].checkValidity()){
            form_array[i].style.borderColor= "green";
        }
        else{
            form_array[i].style.borderColor= "red";
        }
    }

    //Password match
    if(!checkPasswordMatch()){
        form_array[(form_array.length)-1].style.borderColor= "red";
        form_array[(form_array.length)-2].style.borderColor= "red";
    }
}
