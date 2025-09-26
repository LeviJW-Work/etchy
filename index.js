//Elements
const btn16= document.getElementById("16x16");
const btn32= document.getElementById("32x32");
const btn64= document.getElementById("64x64");
const btnClear= document.getElementById("clear");
const btnSize= document.getElementById("size");
const container = document.getElementById("container");
const pad = document.getElementById("pad");
const divOne = document.getElementsByClassName("gridOne")
const divTwo = document.getElementsByClassName("gridTwo")
const divThree = document.getElementsByClassName("gridThree")
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
    return
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
    return
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
    return }
    
btnClear.addEventListener("click", clear)
function clear(){
    if(divOne.length > 0){
        for(let i= divOne.length-1 ; i>=0; i--){
            divOne.item(i).remove()
        }
        start16()
    }else if(divTwo.length > 0){
        for(let i= divTwo.length-1 ; i>=0; i--){
            divTwo.item(i).remove()
        }
        start32()
    }else if(divThree.length > 0){
        for(let i= divThree.length-1 ; i>=0; i--){
            divThree.item(i).remove()
        }
        start64()
    }else{ console.log("probs an error bro")}
}


 
function clearOnly(){
    if(divOne.length > 0){
        for(let i= divOne.length-1 ; i>=0; i--){
            divOne.item(i).remove()
        }
    }else if(divTwo.length > 0){
        for(let i= divTwo.length-1 ; i>=0; i--){
            divTwo.item(i).remove()
        }
    }else if(divThree.length > 0){
        for(let i= divThree.length-1 ; i>=0; i--){
            divThree.item(i).remove()
        }
    }
}

btnSize.addEventListener("click",size)
function size(){
    clearOnly()
    container.classList.add("active")
}

