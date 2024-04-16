let locked = true;
function confirmpassword(){
const pass = document.getElementById('password').value;
const confirmp = document.getElementById('confirm-password')

if (pass===confirmp){
    document.getElementById('signSection').style.display = "none";
    document.getElementById('welcome').style.display = "block";
    locked = false;
} else {
    prompt("Password doesn't match")
    event.preventDefault()
    return;
    locked = true;
}
}
//DOESN'T WORK!!!!!!!!!!!