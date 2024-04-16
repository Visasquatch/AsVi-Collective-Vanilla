let locked = true;
function confirmpassword(event){
    event.preventDefault();
const pass = document.getElementById('password').value;
const confirmp = document.getElementById('confirm-password').value;

if (pass===confirmp){
    locked = false;
    alert("Sign up successful")
    openNewArrivalsPage()
} else {
    alert("Password doesn't match")
    locked = true;
}
    }
function openNewArrivalsPage(){
    if (!locked){
window.location.href = "newArrivals.html";
 }
    }


