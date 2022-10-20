function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ["max-age"]: 3600,
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

let hello = document.getElementById("name");
let back = document.getElementById("back");
let year = document.getElementsByName("birth")[0];
let btn = document.getElementById("btn");

year.max = new Date().getFullYear();
year.addEventListener("change", function () {
  if (year.value < year.min) year.value = year.min;
  if (year.value > year.max) year.value = year.max;
});

function setHello() {
  let params = new URLSearchParams(window.location.search);
  hello.innerHTML = `<b>Hello, ${params.get("email")}</b>`;
}
setHello();

back.addEventListener("click", function () {
    deleteCookie("email");
    deleteCookie("pass");
    deleteCookie("repPass");
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  setCookie("f_name", document.getElementsByName("f_name")[0].value);
  setCookie("l_name", document.getElementsByName("l_name")[0].value);
  setCookie("birth", document.getElementsByName("birth")[0].value);
  setCookie("gender", document.getElementsByName("gender")[0].value);
  setCookie("phone", document.getElementsByName("phone")[0].value);
  setCookie("skype", document.getElementsByName("skype")[0].value);
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof getCookie("f_name") != "undefined")
    document.getElementsByName("f_name")[0].value = getCookie("f_name");
  if (typeof getCookie("l_name") != "undefined")
    document.getElementsByName("l_name")[0].value = getCookie("l_name");
  if (typeof getCookie("birth") != "undefined")
    document.getElementsByName("birth")[0].value = getCookie("birth");
  if (typeof getCookie("gender") != "undefined")
    document.getElementsByName("gender")[0].value = getCookie("gender");
  if (typeof getCookie("phone") != "undefined")
    document.getElementsByName("phone")[0].value = getCookie("phone");
  if (typeof getCookie("skype") != "undefined")
    document.getElementsByName("skype")[0].value = getCookie("skype");

  if (
    typeof getCookie("email") == "undefined" &&
    typeof getCookie("pass") == "undefined" &&
    typeof getCookie("repPass") == "undefined"
  )
    back.click();
});
