function showInput() {
  var pNumberField = document.getElementById('pNumberpost');
  var mailField = document.getElementById('mailpost');
  var pNumberRadioButton = document.getElementById('pNumberget');

  if (pNumberRadioButton.checked) {
      pNumberField.style.display = 'table-cell';
      mailField.style.display = 'none';
  } else {
      pNumberField.style.display = 'none';
      mailField.style.display = 'table-cell';
  }
}  