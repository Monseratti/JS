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
    let contUpH = $(".container_left_up").css("height").split("p")[0];
    let contDownH = $(".container_left_down").css("height").split("p")[0];

    $(".container_left_up").css(
      "height",
      contUpH >= 100 ? `${ev.pageY}px` : 100
    );
    contUpH = $(".container_left_up").css("height").split("p")[0];
    $(".container_left_down").css(
      "height",
      contDownH >= 100
        ? $(".container_left").css("height").split("p")[0] -
            $("#left_move").css("height").split("p")[0] -
            contUpH
        : 100
    );
  })
);

$(".container_left").mouseup(() => {
  $(".container_left").off("mousemove");
});

$("#right_move").mousedown(() =>
  $(".container_right").mousemove((ev) => {
    let contUpH = $(".container_right_up").css("height").split("p")[0];
    let contDownH = $(".container_right_down").css("height").split("p")[0];

    $(".container_right_up").css(
      "height",
      contUpH >= 100 ? `${ev.pageY}px` : 100
    );
    contUpH = $(".container_right_up").css("height").split("p")[0];
    $(".container_right_down").css(
      "height",
      contDownH >= 100
        ? $(".container_right").css("height").split("p")[0] -
            $("#right_move").css("height").split("p")[0] -
            contUpH
        : 100
    );
  })
);

$(".container_right").mouseup(() => {
  $(".container_right").off("mousemove");
});
