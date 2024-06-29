const gradientBox = document.querySelector('.gradient-box');
const inputColors = document.querySelectorAll('.colors input');
const selectMenu = document.querySelector('.select-box select');
const textArea = document.querySelector(".wrapper textarea");
const textCode = document.querySelector(".wrapper .textCode");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");


const getRandomColor=()=>{
    const randomHexColor = Math.floor(Math.random() * 0xffffff ).toString(16);
    return `#${randomHexColor}`
}

const generateGradient = (isRandom)=>{
  if(isRandom){
inputColors[0].value=getRandomColor();
inputColors[1].value=getRandomColor();
isRandom=false;
  }
const  gradient = `linear-gradient(${selectMenu.value}, ${inputColors[0].value}, ${inputColors[1].value})`;
textArea.value = `background:${gradient}`
console.log(gradient)
console.log(selectMenu.value)
gradientBox.style.background = gradient;
}

const copyCode = ()=> {
    console.log("copied");
navigator.clipboard.writeText(textArea.value);
copyBtn.innerText =" Code Copied";
setTimeout(() => copyBtn.innerText ="Copy Code", 1600)
    }
inputColors.forEach(input => { 
    input.addEventListener('input',() => generateGradient(false));
})

selectMenu.addEventListener('change',() => generateGradient(false));
refreshBtn.addEventListener('click',()=>generateGradient(true))
copyBtn.addEventListener('click',copyCode);
textArea.addEventListener('click',copyCode);
