// T1
// document
//   .getElementById("generateRandom")
//   .addEventListener("click", function () {
//     document.getElementById("randomDiv").innerText = Math.round(
//       Math.random() * 100
//     );
//   });

//   T2
// document.getElementById("myWindows").addEventListener(
// "mousemove", function(){
//   document.getElementById("myWindows").innerText = `X = ${e.pageX}, Y = ${e.pageY}`;
// }
// );
// document.getElementById("myWindows").addEventListener(
//   "mousedown", function(){
//     switch(e.button){
//       case 0: document.getElementById("myWindows").innerText += `\n Click left button`; break;
//       case 1: document.getElementById("myWindows").innerText += `\n Click middle button`; break;
//       case 2: document.getElementById("myWindows").innerText += `\n Click right button`; break;
//       default: break;
//     }
//   }
//   );

// T3
// let textBlock = document.getElementById("myText");
// document
//   .getElementById("hideShowText")
//   .addEventListener("click", function () {
//     if(textBlock.style.display == "none"){
//       textBlock.style.display = "inline-block";
//     }
//     else{
//       textBlock.style.display = "none";
//     }
//   });

// T4
// let liItems = document.getElementsByTagName("li");
// let textItems = document.getElementsByClassName("text");
// function clearClass() {
//   for (let item of liItems) {
//     item.className = "";
//   }
//   for(let textitem of textItems){
//     textitem.style.display = "none";
//   }
// }
// for (let item of liItems) {
//   item.addEventListener("click", function () {
//     clearClass();
//     item.className = "active";
//     document.getElementById(`text-${item.id}`).style.display = "block";
//   });
// }

// T5
// let buttons = document.getElementsByClassName("news");
// console.log(buttons);
// for (let btn of buttons) {
//   btn.addEventListener("click", function () {
//     document.getElementById(`${btn.id}`).style.display = "none";
//   });
// }

// T6
// let pb_body = document.getElementById("pb_body");
// var width = 0;
// document.getElementById("add5Perc").addEventListener(
//   "click", function(){
//     if(width<100){
//       width+=5;
//       pb_body.style.width = `${width}%`;
//       console.log(width);
//     }
//   }
// );

// T7
// let cells = document.getElementsByTagName("td");
// for(let cellElement of cells){
//   cellElement.addEventListener(
//     "mouseenter", function(){
//       cellElement.style.backgroundColor="#FFA984";
//     }
//   );
//   cellElement.addEventListener(
//     "mouseleave", function(){
//       cellElement.style.backgroundColor="#FFFFFF";
//     }
//   );
// }

// T8
// document.onselectstart = () => false;
// document.oncontextmenu = () => false;

// T9
// var clickCount = 0;
// document.getElementById("likeButton").addEventListener(
// "click", function(){
//     clickCount++;
//     if(clickCount<10){
//         document.getElementById("content").innerText = `Like 0${clickCount}`;
//     }
//     else
//     document.getElementById("content").innerText = `Like ${clickCount}`;
// }
// );

// T10
let liItems = document.getElementsByTagName("li");
for (let item of liItems) {
  item.addEventListener("mouseenter", function () {
    item.style.backgroundColor = "#4973A3";
  });
  item.addEventListener("mouseleave", function () {
    item.style.backgroundColor = "#597BA1";
  });
  item.addEventListener("click", function () {
    if (item.id == "sumbenu_item") {
      if (document.getElementById("submenu").style.display == "none"){
        document.getElementById("submenu").style.display = "flex";
    }
      else document.getElementById("submenu").style.display = "none";
    }
  });
}
