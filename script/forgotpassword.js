const pNumberpost = document.getElementById('pNumberpost');
const mailpost = document.getElementById('mailpost');
const pNumberget = document.getElementById('pNumberget');
const mailget = document.getElementById('mailget');


function showInput() {
  if(pNumberget.checked === true){
    pNumberpost.style.display='block';
    mailpost.style.display='none';
  }
  else if(mailget.checked === true){
    pNumberpost.style.display ='none'
    mailpost.style.display ='block'
}}

