// T1
// $("#btn").click(() => {
//   let res = $("#r")[0];
//   res.value = null;
//   let resArray = [];

//   if ($("#n")[0].checked)    Array.from(Array(10)).map((e, i) => +i).forEach((el) => {resArray.push(el);});
//   if ($("#u")[0].checked)    Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65)).forEach((el) => {resArray.push(el);});
//   if ($("#l")[0].checked)    Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97)).forEach((el) => {resArray.push(el); });

//   if (resArray.length != 0) {
//     for (let i = 0; i < $("#long")[0].value; i++) {
//       res.value += resArray[Math.round(Math.random() * (resArray.length - 1))];
//     }
//   }
// });

// T2
$("#close_open_left").click((e) => {
  $(".container_left").toggle();
  if ($(".container_left").css("display") == "none") {
    $(".container_right_up").css("width", "100vw");
    e.target.textContent = ">";
  } else {
    $(".container_right_up").css("width", "70vw");
    e.target.textContent = "<";
  }
});

$("#left_move").mousedown(() =>
  $(".container_left").mousemove((ev) => {
    $(".container_left_up").css("height", `${ev.pageY}px`);
    $(".container_left_down").css(
      "height",
      $(".container_left").css("height").split("p")[0] -
        $(".container_left_up").css("height").split("p")[0]
    );
  })
);

$(".container_left").mouseup(()=>{$(".container_left").off("mousemove")});

$("#right_move").mousedown(() =>
  $(".container_right").mousemove((ev) => {
    $(".container_right_up").css("height", `${ev.pageY}px`);
    $(".container_right_down").css(
      "height",
      $(".container_right").css("height").split("p")[0] -
        $(".container_right_up").css("height").split("p")[0]
    );
  })
);

$(".container_right").mouseup(()=>{$(".container_right").off("mousemove")});
