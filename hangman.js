let ltr="abcdefghijklmnopqrstuvwxyz";
let letters=document.querySelector(".letters")
let ar=Array.from(ltr);
ar.forEach(e => {
    let elem=document.createElement("div");
let txt=document.createTextNode(e);
elem.appendChild(txt);
elem.className="box";
letters.appendChild(elem)
});
const words={
 programming:["php","javascript","python","html","kotlin","flutter","go"],
 football:["cristiano","messi","neymar","hazard","mahez","benzema","zidan"],
countrie:["algeria","saudia","brazil","portugal","japan","palastine","senegal"],
capitals:["madrid","roma","paris","london","munich","tokyo","moscow"]
}
let catigorie=document.querySelector(".categorie");
let keys=Object.keys(words)
let word=Math.floor(keys.length *Math.random());


let name=keys[word];

let nm = words[name];
//console.log(name)
let txt=document.createTextNode(name);
catigorie.appendChild(txt)


let mot=Math.floor(nm.length* Math.random());
let gues=nm[mot];
 let guess=document.querySelector(".guess");
 
 for(let i=0;i<gues.length;i++){
    let div=document.createElement("div");
    div.className=`a${i}`;
  guess.appendChild(div);
 }





let array= Array.from(gues);
//console.log(array)
let box=document.getElementsByClassName("box");
//console.log(box)
var index=0
var nb=0
var s=0
let box2=Array.from(box);
//console.log(box2);
box2.forEach(e=> {
    e.id=`c${s}`;
       let h=document.getElementById(`c${s}`)
    s++;
    e.addEventListener("click",function(){
        
if(e.innerHTML!=array[index]){
    setTimeout(() => {

        h.style.border="2px solid red "
    }, 10);
    setTimeout(() => {

        h.style.border="none "
    }, 300);
    nb++;
if(nb==1){
    let draw=document.getElementById("head");
    draw.style.opacity="1";
}
if(nb==2){
    let draw=document.getElementById("body");
    draw.style.opacity="1";
}
if(nb==3){
    let draw=document.getElementById("lefth");
    draw.style.opacity="1";
}
if(nb==4){
    let draw=document.getElementById("righth");
    draw.style.opacity="1";
}
if(nb==5){
    let draw=document.getElementById("leftf");
    draw.style.opacity="1";
}
if(nb==6){
    let draw=document.getElementById("rightf");
    draw.style.opacity="1";
    setTimeout(() => {
        window.alert("you lost")
    }, 300);
    setTimeout(() => {
        document.location.reload();
    }, 300);
}
}
else{
    let jj=document.querySelector(`.a${index}`);
    let t=document.createTextNode(e.innerHTML)
    jj.appendChild(t);

    index++;
    if(index==gues.length) {
        setTimeout(() => {
            window.alert("you win")
        }, 300);
        setTimeout(() => {
            document.location.reload();
        }, 300);
    }
}

    })
});




