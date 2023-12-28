$ = document.querySelector.bind(document);

function changeClover(){
  
  window.alert("clover");
  cloverElement = $("#clover-h2");
  cloverElement.style.color = 'red';
}

cloverbutton = $('#btn-click');
cloverbutton.onclick = changeClover;







