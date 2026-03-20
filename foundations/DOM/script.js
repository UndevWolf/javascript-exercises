const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.style.color = "red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

const blueH3 = document.createElement("h3");
blueH3.setAttribute("style", "color:blue");
blueH3.textContent = "I am a blue h3";
container.appendChild(blueH3);

const blackPinkDiv = document.createElement("div");
blackPinkDiv.setAttribute("style","color:white; background:black; border: solid, pink");


const h1Inside = document.createElement("h1");
h1Inside.textContent = "Im in a div.";
blackPinkDiv.appendChild(h1Inside);

const par = document.createElement("p");
par.textContent = "METOO";
blackPinkDiv.appendChild(par);


container.appendChild(blackPinkDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target.style.background = "blue");
});