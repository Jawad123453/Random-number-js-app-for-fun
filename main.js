let my=document.getElementById("random");
let main=document.querySelector(".center");
let div=document.createElement("div");
let p=document.createElement("p");

my.addEventListener("click",function(){
  div.classList.add("putNumber");
  p.textContent=(Math.floor(Math.random()*100_000_000))+1;
  div.appendChild(p);
  main.append(div);
})
