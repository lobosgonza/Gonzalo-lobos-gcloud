

var inputMail = document.getElementById("mailInput");
var messageMail = document.getElementById("mailMessage");

function modifyText() {
  messageMail.innerHTML = "No compartiremos tu información con nadie.";
}
  function load() { 
  inputMail.addEventListener("click", modifyText, false);
  }
  document.addEventListener("DOMContentLoaded", load, false)