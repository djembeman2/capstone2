$ = document.querySelector.bind(document);


colorTheme={
    compColor: "lightblue"
}




function setCompStyle(){
    compHeader= $("#comp");
    compHeader.style.color=colorTheme.compColor;
    compHeader.style.backgroundColor=colorTheme.compBackgroundColor;
}


button =$("#clickMe-button");
button.onclick= setHeader;







