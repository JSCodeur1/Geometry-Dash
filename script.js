console.log("Geometry Dash !");

const body = document.querySelector('body');
const taille = window.innerHeight;
const joueur = document.getElementById('player');
var y = 300,
    h,
    deg=0,
    hh,
    k;

console.log(y);

document.querySelector('html').style.backgroundSize = taille.toString() + 'px';
joueur.style.top = y.toString() + "px";
joueur.style.left = "100px";

function monter(n) {
    // console.log(joueur.style.top.valueOf());
    y -= n;
    joueur.style.top = y.toString() + "px";
}

document.onkeydown = function(e) {
    k = e.keyCode;
    if (k === 32 || k === 38 || k === 87) {
        console.log("saut");
        h=14
        interval = setInterval(sauter, 1000/60);
    }
}

function sauter() {
    monter(h);
    h -= 1;
    deg += 180/29;
    joueur.style.transform = 'rotate('+deg+'deg)';
    if (h<-14) {
        clearInterval(interval);
    }  
}

function createGrid() {
    div = document.createElement('div');
    body.appendChild(div);
    div.style.backgroundColor = "blue";
    div.style.width = "50px";
    div.style.height = "50px";
}

//createGrid();