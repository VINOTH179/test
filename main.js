const passwordInput = decument.getElementById ("password");
const togglepassword = decument.getElementById ("togglepassword");
togglepassword. addEventListener("click",()=>{
    if(passwordInput.type === "password"){
        passwordInput.type="text";
        togglepassword.innerHTML ="Hide";
    }else{
        passwordInput.type = "password";
        togglepassword.innerHTML = "Show";
    }
});