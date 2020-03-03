
//La première case
function card1Out(){
    let img = document.getElementsByTagName("img")[0];
    setTimeout(() => {
        img.setAttribute("src", "img/back-carte.png");
    }, 780);
};

let card1 = document.getElementById("card1");
card1.addEventListener("mouseover", function(){
    let img = document.getElementsByTagName("img")[0];
    setTimeout(() => {
        img.setAttribute("src", "img/carte-2-carreau.png");
    }, 780);
});


//La deuxième case
function card2Out(){
    let img = document.getElementsByTagName("img")[1];
    setTimeout(() => {
        img.setAttribute("src", "img/back-carte.png");
    }, 780);
};

function card2(){
    let img = document.getElementsByTagName("img")[1];
    setTimeout(() => {
        img.setAttribute("src", "img/carte-10-coeur.png");
    }, 780);
};

//La troisème case
function card3Out(){
    let img = document.getElementsByTagName("img")[2];
    setTimeout(() => {
        img.setAttribute("src", "img/back-carte.png");
    }, 780);
};

function card3(){
    let img = document.getElementsByTagName("img")[2];
    setTimeout(() => {
        img.setAttribute("src", "img/carte-3-coeur.png");
    }, 780);
};

//La quatrième case
function card4Out(){
    let img = document.getElementsByTagName("img")[3];
    setTimeout(() => {
        img.setAttribute("src", "img/back-carte.png");
    }, 780);
};

function card4(){
    let img = document.getElementsByTagName("img")[3];
    setTimeout(() => {
        img.setAttribute("src", "img/carte-8-pique.png");
    }, 780);
};