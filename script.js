let progressCircular = document.querySelector(".progress-circular"); 
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let value = document.querySelector(".value");
let start = 0;

btn.addEventListener("click", bar);

function bar() {
let progress = setInterval(() => {
start++;
value.textContent = `${start}`;
progressCircular.style.background = `conic-gradient(rgb(4, 254, 117) ${start} deg, #ededed 0deg)`;
if (start == inp.value){
clearInterval (progress);
inp.value = "";
}
});

}