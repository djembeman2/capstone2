function onButtonClick(){
  alert('We Making Music');
  const musicTitle= document.querySelector('#clover-h2');
  musicTitle.style.backgroundColor="lightblue";
}


const button = document.querySelector('#music-btn')
button.addEventListener('click', onButtonClick);



alert ("Want to hear a joke?");

confirm ("where did the compter start working?");

let g = prompt("would you like to answer...");

let guess = parseInt(g);

if(7 === 7){
  alert("the Motherboard");
} else {
  alert("try agian!");
}
alert("We Love coding");

colorTheme = {
  liveColor: "orange",
  liveBackgroundColor: "brown",
  inColor: "red",
  inBackgroundColor: "blue",
  musicColor:"red",
  musicBackgroundColor:"orange",
  alwaysColor: "brown",
  alwaysBackgroundColor:"orange"
};

function setLiveStyle(){
  liveHeader = document.querySelector("#live");
  liveHeader.style.color = colorTheme.liveColor;
  liveHeader.style.backgroundColor = colorTheme.liveBackgroundColor;
}

function setInStyle() {
  inHeader = $("#inut");
  inHeader.style.color = colorTheme.inColor;
  inHeader.style.backgroundColor = colorTheme.inBackgroundColor;
}


function setMusicStyle() {
  musicHeader = $("#mus");
  musicHeader.style.color = colorTheme.musicColor;
  musicHeader.style.backgroundColor = colorTheme.musicBackgroundColor;
}


function setAlwaysStyle() {
  alwaysHeader = $("#alw");
  alwaysHeader.style.color = colorTheme.alwaysColor;
  alwaysHeader.style.backgroundColor = colorTheme.alwaysBackgroundColor;
}

function setAll() {
  setLiveStyle();
  setInStyle();
  setMusicStyle();
  setAlwaysStyle();
}

let chanButton = ("#chan-btn");
chanButton.onclick = setAll;
