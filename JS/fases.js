var colors = []
var divs = document.querySelectorAll('.color')
for(var c= 0; c <= divs.length - 1; c++){
    var R = Math.ceil(Math.random() * 256)
    var G = Math.ceil(Math.random() * 256)
    var B = Math.ceil(Math.random() * 256)
    var RGB = `rgb(${R}, ${G}, ${B})`
    colors.push(RGB)
}
for(var pos = 0; pos <= divs.length - 1; pos++){
    divs[pos].style.backgroundColor = `${colors[pos]}`
}
var title = document.querySelector('h1')
var winner = colors[Math.ceil(Math.random() * colors.length - 1)]
title.innerText = `${winner}`
function check(n){
    var WinText = document.createElement('WinText')
    var LoseText = document.createElement('LoseText')
    WinText.innerHTML = `<h2>Parabéns! Você acertou!</h2> 
    <button onclick="window.location.reload()">Jogar Novamente</button>`
    LoseText.innerHTML = `<h2>Você errou, tente novamente</h2> 
    <button onclick="window.location.reload()">Jogar Novamente</button>`
    if(divs[n].style.backgroundColor == `${winner}`){
        body.appendChild(WinText)
    }else{
        body.appendChild(LoseText)
    }
    for(var x = 0; x <= divs.length - 1; x++){
        divs[x].onclick = ""
    }
}