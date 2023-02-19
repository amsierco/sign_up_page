//Matching passwords
function checkPasswordMatch(){
    let password_1 = document.getElementById("password").value;
    let password_2 = document.getElementById("confirm-password").value;
    if(password_1 != password_2){
        console.log("Passwords Do Not Match!");
        password_1 = null;
        password_2 = null;
        return false;
    }
    else
    {
        console.log("Passwords Match!");
        return true;
    }
}

//Adds button functionality
const submit_btn = document.querySelector(".btn")
submit_btn.addEventListener("click", () => {
    //checkPasswordMatch();
    validateForm();
});

//Validate Form
function validateForm(){
    let form_array = document.querySelectorAll(".input input");
    for(let i=0; i<form_array.length; i++){
        console.log(form_array[i].value);
        if(form_array[i].value == ""){

            let node_id = document.getElementById("form_array[i].getAttribute('id')");
            console.log(node_id);
            node_id.style.cssText= 'background-color: green;';//'border-color: green;';
        }
    }
}

//Update UI
function updateUI(){
    if(!validateForm){

    }
}