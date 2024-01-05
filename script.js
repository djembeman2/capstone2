function onButtonClick(){
  alert('We Making Music');
}


const button = document.querySelector('button')
button.addEventListener('click', onButtonClick);


const newButton = document.createElement('button');
newButton.textContent = 'New Music!';
document.body.appendChild(newButton);


newButton.addEventListener('click', () => {
  alert('Haus Of Percussion is on itunes!');
});