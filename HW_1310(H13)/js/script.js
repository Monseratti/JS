// T1
// let container = document.getElementsByClassName("mess_container")[0];
// document.getElementById("btn").addEventListener(
//     "click", function(){
//         let newLine = container.children[0].cloneNode(true);
//         let head = newLine.children[0];
//         let body = newLine.children[1];

//         head.children[0].innerText = document.getElementsByTagName("input")[0].value;
//         head.children[1].children[0].innerText = new Date().toLocaleDateString();
//         head.children[1].children[1].innerText = new Date().toLocaleTimeString();

//         body.innerText = document.getElementsByTagName("textarea")[0].value;

//         container.appendChild(newLine);
//     }
// );

// T2
// let container = document.getElementById("container");
// class Question {
//   constructor(qu, corr_a, wrong_a) {
//     this.qu = qu;
//     this.corr_a = corr_a;
//     this.wrong_a = wrong_a;
//   }
//   print(index, lastindex) {
//     container.innerHTML = `
//             <p style="margin:0; padding:0">${this.qu}</p>
//             <input type = "radio" name = "answ${index}" value = "1">${
//       this.corr_a
//     }
//             <input type = "radio" name = "answ${index}" value = "0">${
//       this.wrong_a
//     }
//             <button id=${lastindex == true ? "fin" : "btn"} onclick = ${
//       lastindex == true ? "finQ()" : "standartQ()"
//     }>${lastindex == true ? "Finish" : "Next"}</button>
//             `;
//   }
// }
// let q1 = new Question("lorraeefa?", "1", "0");
// let q2 = new Question("vvdsvfsvvsvfa?", "4", "3");

// let qarray = [q1, q1, q1, q2];

// let index = 0;
// let lastIndex = false;
// let correct = 0;
// qarray[index].print(index, lastIndex);
// function standartQ() {
//     for(let elem of document.getElementsByName(`answ${index}`)){
//         if (elem.checked) correct+=+elem.value;
//     }
//   if (++index == qarray.length - 1) lastIndex = true;
//   qarray[index].print(index, lastIndex);
// }

// function finQ() {
//     for(let elem of document.getElementsByName(`answ${index}`)){
//         if (elem.checked) correct+=+elem.value;
//     }
//   container.innerHTML = `Result: <b>${correct}</b> correct answers to ${qarray.length} questions`;
// }

// T3
// function showRes() {
//   let params = new URLSearchParams(window.location.search);
//   document.getElementsByClassName(
//     "result"
//   )[0].innerHTML = `<p style = "font-weight:${params.get(
//     "bold"
//   )}; font-style:${params.get("italic")}; text-decoration:${params.get(
//     "underline"
//   )}; text-align:${params.get("textalign")};">${params.get("text")}</p>`;
// }
// showRes();

// T4
// for (let elem of document.getElementsByClassName("btn")) {
//   elem.addEventListener("click", function () {
//     document.getElementById("book").value =
//       this.previousElementSibling.previousElementSibling.children[0].textContent;
//   });
// }
// function myOrder() {
//   let params = new URLSearchParams(window.location.search);
//   document.getElementById("order").innerHTML = `${params.get(
//     "name"
//   )}, thanks for tne order!<br><br> Your book "${params.get(
//     "book"
//   )}" will be delived on ${new Date(
//     params.get("d_date")
//   ).toLocaleDateString()} to ${params.get("d_address")}`;
// }
// myOrder();

// T5
function copyGroup(group){
  newSt = [];
  for(let elem of group.st){
    newSt.push({ name: elem.name, ispresent: false });
  }
  return {id: group.id, st: newSt };
}
function copyLesson(less){
  return {id: less.id, topic: "" };
}

let selectGroup = document.getElementsByName("group")[0];
let selectLesson = document.getElementsByName("lesson")[0];
let container = document.getElementsByClassName("bottom_field")[0];

let students = [];
students[0] = { name: "Stud 1", ispresent: false };
students[1] = { name: "Stud 2", ispresent: false };
students[2] = { name: "Stud 3", ispresent: false };

let st1 = [];
for (let elem of students) {
  st1.push(elem);
}
st1.push({ name: "Stud 4", ispresent: false });

let st2 = [];
for (let elem of students) {
  st2.push(elem);
}
st2.push({ name: "Stud 5", ispresent: false });

let lessons = [];
lessons[0] = { id: 0, topic: "" };
lessons[1] = { id: 1, topic: "" };
lessons[2] = { id: 2, topic: "" };
lessons[3] = { id: 3, topic: "" };
lessons[4] = { id: 4, topic: "" };
lessons[5] = { id: 5, topic: "" };

let groups = [];
groups.push({ id: 0, st: students });
groups.push({ id: 1, st: st1 });
groups.push({ id: 2, st: st2 });

for (let i = 0; i < groups.length; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = `Group ${i + 1}`;
  selectGroup.appendChild(opt);
}
for (let i = 0; i < lessons.length; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = i + 1;
  selectLesson.appendChild(opt);
}

let groupLesson = [];
for (let elem of lessons) {
  for (let group of groups) {
    groupLesson.push({ lesson: copyLesson(elem), group: copyGroup(group) });
  }
}
document.getElementById("bnt").addEventListener("click", function () {
  if (container.children.length == 0) {
    // TOPIC
    let tmp = document.createElement("tmpel");
    tmp.innerText = "Topic: ";
    container.appendChild(tmp);

    tmp = document.createElement("input");
    tmp.type = "text";
    tmp.id = "theme";
    container.appendChild(tmp);
    // END TOPIC

    // TABLE
    let tableValue = document.createElement("table");
    // HEAD
    tmp = document.createElement("tr");
    let tVHeadR = document.createElement("td");
    tVHeadR.innerHTML = "<b>Students</b>";
    tmp.appendChild(tVHeadR);

    tVHeadR = document.createElement("td");
    tVHeadR.innerHTML = "<b>In presents</b>";
    tmp.appendChild(tVHeadR);

    tableValue.appendChild(tmp);
    // END HEAD

    // TABLE BODY
    for (let elem of groupLesson) {
      if (
        elem.lesson.id == selectLesson.value &&
        elem.group.id == selectGroup.value
      ) {
        console.log(elem);
        document.getElementById("theme").value = elem.lesson.topic;
        let iter = 0;
        for (let st of elem.group.st) {
          tmp = document.createElement("tr");

          let tRow = document.createElement("td");
          tRow.id = `stud${iter}`;
          tRow.innerText = st.name;
          tmp.appendChild(tRow);

          tRow = document.createElement("td");
          let cbx = document.createElement("input");
          cbx.type = "checkbox";
          cbx.id = `st${iter}`;
          cbx.checked = st.ispresent;
          tRow.appendChild(cbx);

          tmp.appendChild(tRow);
          tableValue.appendChild(tmp);

          iter++;
        }
      }
    }
    // END TABLE BODY
    tableValue.style.gridColumn = "span 2";
    container.appendChild(tableValue);
    // END TABLE

    // SAVE BUTTON
    tmp = document.createElement("button");
    tmp.innerHTML = "Save";
    tmp.id = "save_btn";
    tmp.style.gridColumn = "span 2";
    container.appendChild(tmp);
    document.getElementById("save_btn").addEventListener("click", function () {
      for (let elem of groupLesson) {
        if (
          elem.lesson.id == selectLesson.value &&
          elem.group.id == selectGroup.value
        ) {
          elem.lesson.topic = document.getElementById("theme").value;
          let iter = 0;
          for (let st of elem.group.st) {
            st.ispresent = document.getElementById(`st${iter}`).checked;
            iter++;
          }
        }
      }
      for (let i = container.childNodes.length - 1; i >= 0; i--) {
        container.removeChild(container.childNodes[i]);
      }
    });
    // END SAVE BUTTON
  }
});

selectGroup.addEventListener("change", function () {
  for (let i = container.childNodes.length - 1; i >= 0; i--) {
    container.removeChild(container.childNodes[i]);
  }
  console.log(`Group ${+selectGroup.value+1}`);
});
selectLesson.addEventListener("change", function () {
  for (let i = container.childNodes.length - 1; i >= 0; i--) {
    container.removeChild(container.childNodes[i]);
  }
  console.log(`Lesson ${+selectLesson.value+1}`);
});

// T6

// // train seats
// class Seat {
//   constructor(number, istaken, price) {
//     this.number = number;
//     this.istaken = istaken;
//     this.price = price;
//   }
// }
// function newSeatsArr(number) {
//   let arr = [];
//   for (let i = 0; i < number; i++) {
//     arr.push(new Seat(+i + 1, false, 8));
//   }
//   return arr;
// }
// // end train seats

// // train
// class Train {
//   constructor(direction, seats, date) {
//     this.direction = direction;
//     this.seats = seats;
//     this.date = new Date(date).toLocaleDateString();
//   }
// }
// let train1 = new Train("Odesa-Kyiv", newSeatsArr(28), "10/18/2022");
// let train2 = new Train("Odesa-Lviv", newSeatsArr(28), "10/20/2022");
// let trains = [train1, train2];
// // end train

// // date get
// let selectDate = document.getElementsByName("date")[0];
// // end date get

// // container get
// let container = document.getElementsByClassName("bottom_field")[0];
// // end container get

// // selector set
// let selectDirection = document.getElementsByName("direction")[0];
// trains.forEach((element) => {
//   let tmp = document.createElement("option");
//   tmp.value = element.direction;
//   tmp.text = element.direction;
//   selectDirection.appendChild(tmp);
// });
// // end selector set
// let ticketSum = 0;
// let selectTrain;
// // select button event
// document.getElementById("btn").addEventListener("click", function () {
//   // find train
//   selectTrain = trains.filter(
//     (o) =>
//       o.direction == selectDirection.value &&
//       o.date == new Date(selectDate.value).toLocaleDateString()
//   )[0];
//   if (typeof selectTrain == "undefined") {
//     alert(
//       `No train on ${new Date(selectDate.value).toLocaleDateString()} to ${
//         selectDirection.value
//       } direction`
//     );
//     return;
//   }
//   // end find train
//   // print train
//   let tmp = document.createElement("div");
//   tmp.className = "train_body";
//   // coupe
//   let coupeCount = Math.floor(selectTrain.seats.length / 4);
//   for (let i = 0; i < coupeCount; i++) {
//     let coupe = document.createElement("div");
//     coupe.className = "coupe";
//     coupe.style.width = `${100 / coupeCount}%`;
//     // seats
//     for (let y = 4 * i; y < 4 * (i + 1); y++) {
//       let seat = document.createElement("div");
//       seat.className = "seat";
//       let label = document.createElement("label");
//       label.className = "seatnumber";
//       label.innerHTML = `<input type="checkbox" name ="seatplace" value = ${
//         selectTrain.seats[y].price
//       } ${selectTrain.seats[y].istaken == false ? "" : "checked disabled"}> ${
//         selectTrain.seats[y].number
//       }`;
//       seat.appendChild(label);
//       coupe.appendChild(seat);
//     }
//     // end seats
//     tmp.appendChild(coupe);
//   }
//   // end coupe
//   container.appendChild(tmp);
//   document.getElementsByName("seatplace").forEach((element) => {
//     element.addEventListener("change", function () {
//       if (element.checked) ticketSum += +element.value;
//       else ticketSum -= +element.value;
//       document.getElementById("ticketSum").innerHTML = `Total: $${ticketSum}`;
//     });
//   });
//   // end print train

//   // summary
//   let summary = document.createElement("div");
//   summary.className = "summary";
//   tmp = document.createElement("div");
//   tmp.id = "ticketSum";
//   tmp.innerHTML = `Total: $${ticketSum}`;
//   let buyBTN = document.createElement("button");
//   buyBTN.textContent = "Buy ticket";
//   buyBTN.id = "buyBTN";
//   buyBTN.style.marginLeft = "10px";
//   summary.appendChild(tmp);
//   summary.appendChild(buyBTN);
//   container.appendChild(summary);
//   // end summary
//   // end select button event
  
//   //buy button 
//   document.getElementById("buyBTN").addEventListener("click", function () {
//     let ticketplace = document.getElementsByClassName("seatnumber");
//     for (let element of ticketplace) {
//       if (element.children[0].checked) {
//         selectTrain.seats[
//           +element.textContent.replace(" ", "") - 1
//         ].istaken = true;
//       }
//     }
//     for (let i = container.childNodes.length - 1; i >= 0; i--) {
//       container.removeChild(container.childNodes[i]);
//     }
//     ticketSum = 0;
//   });
//   //end buy button 
// });

// // date change event
// selectDate.addEventListener("change", function(){
//   for (let i = container.childNodes.length - 1; i >= 0; i--) {
//     container.removeChild(container.childNodes[i]);
//   }
// })
// // end date change event

// // selector change event
// selectDirection.addEventListener("change",function(){
//   for (let i = container.childNodes.length - 1; i >= 0; i--) {
//     container.removeChild(container.childNodes[i]);
//   }
// })
// // end selector change event


