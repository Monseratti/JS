// T1
// $(`.container`).on("mousemove", (e) => {
//   $("img").css({
//     top:
//       e.pageY > $("img").prop("height") ? e.pageY - $("img").prop("height") : 0,
//     left:
//       e.pageX > $("img").prop("width") ? e.pageX - $("img").prop("width") : 0,
//   });
// });

// T2
// $("#menu").click(function (e) {
//   console.log($("ul").css("width"));
//   if($("ul").css("width")=='50px'){
//       $("ul>li").css("content-visibility", "visible");
//       $("ul").css("width", "auto");
//   }
//   else{
//     $("ul>li").css("content-visibility", "hidden");
//       $("ul").css("width", "50px");
//   }
// });

// T3
// $('button').click(function (e) { 
//   $(`*`).removeClass("shadow");
//   $(`.${$(this)[0].className}`).addClass("shadow");
  
// });

// T4
$('span').click((e)=>{
  $('span').removeClass("fa-star");
  $('span').addClass("fa-star-o");
  $(`span:lt(${$('span').index(e.target)+1})`).removeClass('fa-star-o');
  $(`span:lt(${$('span').index(e.target)+1})`).addClass('fa-star');
})
