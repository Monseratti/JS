// T1
// let par = document.getElementById("submit_login");
function FuncT1() {
  let params = new URLSearchParams(window.location.search);
  par.innerText = `Hello, ${params.get("name")}! You are ${
    params.get("rem_me") != "on" ? "not remembered" : "remembered"
  }`;
}
// FuncT1();

// T2
// let par = document.getElementById("submit_login");
function FuncT2() {
  let params = new URLSearchParams(window.location.search);
  par.innerText = `On ${params.get("email")} send confirmation list`;
}
// FuncT2();

// T3
function FuncT3() {
  let params = new URLSearchParams(window.location.search);
  let tmp = document.getElementById("f_name");
  tmp.innerText = `${params.get(`${tmp.id}`)}`;
  tmp = document.getElementById("l_name");
  tmp.innerText = `${params.get(`${tmp.id}`)}`;
  tmp = document.getElementById("bday");
  tmp.innerText = `${new Date(params.get(`${tmp.id}`)).toLocaleDateString()}`;
  tmp = document.getElementById("gender");
  tmp.innerText = `${params.get(`${tmp.id}`) == 0 ? `Male` : `Female`}`;
  tmp = document.getElementById("country");
  tmp.innerText = `${params.get(`${tmp.id}`)}`;
  tmp = document.getElementById("city");
  tmp.innerText = `${params.get(`${tmp.id}`)}`;
  tmp = document.getElementById("skills");
  let skillArray = [];
  if (params.get("html")) skillArray.push(params.get("html"));
  if (params.get("css")) skillArray.push(params.get("css"));
  if (params.get("js")) skillArray.push(params.get("js"));
  if (params.get("php")) skillArray.push(params.get("php"));
  if (params.get("c_pl")) skillArray.push(params.get("c_pl"));
  if (params.get("java")) skillArray.push(params.get("java"));
  if (params.get("c_sh")) skillArray.push(params.get("c_sh"));
  tmp.innerText = `${skillArray}`;
}
// FuncT3();

// T4
// let container = document.getElementById("dcolor");
// let rgb = document.getElementsByTagName("input")
// document.getElementById("addColor").addEventListener("click", function () {
//   if (
//     rgb.r.value < 0 ||
//     rgb.r.value > 255 ||
//     rgb.g.value < 0 ||
//     rgb.g.value > 255 ||
//     rgb.b.value < 0 ||
//     rgb.b.value > 255
//   ) {
//     alert("Wrong value");
//     return;
//   }
//   let newLine = container.children[0].cloneNode(true);
//   newLine.children[0].style.backgroundColor = `rgb(${rgb.r.value},${rgb.g.value}, ${rgb.b.value})`;
//   newLine.children[1].innerText = `RGB (${rgb.r.value},${rgb.g.value}, ${rgb.b.value})`;

//   container.appendChild(newLine);
// });

// T5
let container = document.getElementById("qu_block");
let Q = document.getElementsByTagName("input");
document.getElementById("btn").addEventListener(
  "click", function(){
    let block = document.createElement("div");
    block.className = "quest_block";

    let question = document.createElement("p");
    question.innerText = Q.qu.value;
    question.style.textDecoration = "underline";
    block.appendChild(question);
    
    let corrA = document.createElement("p");
    corrA.innerText = `Correct answer: ${Q.ca.value}`; 
    block.appendChild(corrA);
    
    let wrongA = document.createElement("p"); 
    wrongA.innerText = `Wrong answer: ${Q.wa.value}`; 
    block.appendChild(wrongA);

    container.appendChild(block);
  }
);