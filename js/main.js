var originalText = "";
var encryptText = "";
var background = document.getElementById('background');
var modal = document.getElementById("dialogModal");


function validateKey(event){
    return ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32));
}

function encrypt(){
  var resultContainer = document.getElementById("container-result");
  var notResultContainer = document.getElementById("container-not-result");
  originalText = document.getElementById("originalText").value;

  if (originalText !== "") {
    encryptText = originalText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("result").innerText = encryptText;
    resultContainer.classList.remove("inactive");
    notResultContainer.classList.add("inactive");

  } else {
    resultContainer.classList.add("inactive");
    notResultContainer.classList.remove("inactive");
  }
}

function decrypt(){
  var resultContainer = document.getElementById("container-result");
  var notResultContainer = document.getElementById("container-not-result");
  originalText = document.getElementById("originalText").value;

  if (originalText !== "") {
    encryptText = originalText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
    document.getElementById("result").innerText = encryptText;
    
    resultContainer.classList.remove("inactive");
    notResultContainer.classList.add("inactive");

  } else {
    resultContainer.classList.add("inactive");
    notResultContainer.classList.remove("inactive");
  }
}

function clean(){
  document.getElementById("result").innerText = "";
  document.getElementById("originalText").value ="";
}

function copy(){
  var textarea = document.getElementById("result");
  textarea.select();
  document.execCommand("copy");
  textarea.setSelectionRange(0, 0);
  this.showModal();
  clean();
}

function showModal() {
  modal.show();
  background.style.display = 'block';
}

function closeModal(){
  modal.close();
  background.style.display = 'none';
}