//Elements
const btn16= document.getElementById("16x16");
const btn32= document.getElementById("32x32");
const btn64= document.getElementById("64x64");
const btnClear= document.getElementById("clear");
const btnSize= document.getElementById("size");
const container = document.getElementById("container");
const pad = document.getElementById("pad");
const divOne = document.getElementsByClassName("gridOne")
// btn16.addEventListener("click",() =>{start("gridOne", 16)});
btn16.addEventListener("click", start16);
function start16(){
    container.classList.remove("active")
    pad.classList.add("padOne")

for(i=0; i<256;i++){
    let div = document.createElement("div");
    div.classList.add("gridOne");
    div.addEventListener("mouseenter", () => {
        div.classList.add("colored");});
    pad.appendChild(div)}
    return console.log(16)
}

btn32.addEventListener("click",start32);
function start32(){
    container.classList.remove("active")
    pad.classList.add("padOne")
for(i=0; i<1024;i++){
    let div = document.createElement("div");
    div.classList.add("gridTwo");
    div.addEventListener("mouseenter", () => {
        div.classList.add("colored");});
    pad.appendChild(div)}
    return console.log(32)
}
btn64.addEventListener("click",start64);
function start64(){
    container.classList.remove("active")
    pad.classList.add("padOne")
for(i=0; i<4096;i++){
    let div = document.createElement("div");
    div.classList.add("gridThree");
    div.addEventListener("mouseenter", () => {
        div.classList.add("colored");});
    pad.appendChild(div)}
    return console.log(64)
}
function clear(){
    divOne.classList.remove("colored")
}
btnSize.addEventListener("click",size)
function size(){
    container.classList.add("active")
    
}
