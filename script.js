function onButtonClick(){
  alert('We Making Music');
  const musicTitle= document.querySelector('#clover-h2');
  musicTitle.style.backgroundColor="lightblue";
}


const button = document.querySelector('#music-btn')
button.addEventListener('click', onButtonClick);


const newButton = document.createElement('button');
newButton.textContent = 'New Music!';
document.body.appendChild(newButton);


newButton.addEventListener('click', () => {
  alert('Haus Of Percussion is on itunes!');
});

alert ("Want to hear a joke?");

confirm ("where did the compter start working?");

let g = prompt("would you like to answer...");

let guess = parseInt(g);

if(guess === 7){
  alert("the Motherboard");
} else {
  alert("try agian!");
}
alert("We Love coding");