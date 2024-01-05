function onButtonClick(){
  alert('We Making Music');
  const musicTitle= document.querySelector('#clover-h2');
  musicTitle.style.backgroundColor="red";
}


const button = document.querySelector('#music-btn')
button.addEventListener('click', onButtonClick);


const newButton = document.createElement('button');
newButton.textContent = 'New Music!';
document.body.appendChild(newButton);


newButton.addEventListener('click', () => {
  alert('Haus Of Percussion is on itunes!');
});