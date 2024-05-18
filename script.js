/* ---------------- fonctions ---------------- */

function monter(n) {
    // console.log(joueur.style.top.valueOf());
    y -= n;
    joueur.style.top = y.toString() + "px";
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

function grid(top, left, width, height) {
    d = document.createElement('div');
    body.appendChild(d);
    d.style.backgroundColor = "black";
    d.style.top = top.toString() + "px";
    d.style.left = left.toString() + "px";
    d.style.width = width.toString() + "px";
    d.style.height = height.toString() + "px";
    return d;
}

function rect(can, top=0, left=0, width=0, height=0) {
    const ctx = can.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(top,left,width,heigth);
}

function jump() {
    h=14
    interval = setInterval(sauter, 1000/60);
}

/* ----------------- projet ----------------- */

console.log("Geometry Dash !");

const body = document.querySelector('body');
const tailleY = window.innerHeight;
const tailleX = window.innerWidth;
const joueur = document.getElementById('player');
const html = document.querySelector('html');
var y = 400,
    h,
    deg=0,
    hh,
    k,
    canvas;

console.log(y);
html.onclick = function () {
    if (y === 400) {
        jump();
    }
}

//document.querySelector('html').style.backgroundSize = taille.toString() + 'px';
joueur.style.top = y.toString() + "px";
joueur.style.left = "100px";

document.onkeydown = function(e) {
    k = e.keyCode;
    if ((k === 32 || k === 38 || k === 87) && y === 400) {
        console.log("saut");
        jump();
    }
}

div = grid(400, 0,tailleX-15,50)
