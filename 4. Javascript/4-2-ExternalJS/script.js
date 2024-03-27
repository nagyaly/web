function validate(){
    var email = document.getElementById("email");
    var label = document.getElementById("lbl");
    if(email.value.includes("@aast.edu")){
        label.innerText = "Valid";
        email.style.color = 'green';
    }
    else{
        label.innerText = "invalid";
        email.style.color = 'red';
    }
}