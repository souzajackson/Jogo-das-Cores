var difficulty = document.querySelectorAll('div')
difficulty[0].style.backgroundColor = "rgb(0, 190, 0)"
function changeColor(n){
    for(var c = 2; c >= 0; c--){
        difficulty[c].style.backgroundColor = "rgb(0, 220, 0)"
    }
    difficulty[n].style.backgroundColor = "rgb(0, 190, 0)"
}
function play(){
    if(difficulty[0].style.backgroundColor == "rgb(0, 190, 0)"){
        window.location.replace("fases/easy.html")
    }else if(difficulty[1].style.backgroundColor == "rgb(0, 190, 0)"){
        window.location.replace("fases/normal.html")
    }else{
        window.location.replace("fases/hard.html")
    }
}