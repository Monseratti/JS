let email = document.getElementsByName("email")[0];
let pass = document.getElementsByName("pass")[0];
let rep_pass = document.getElementsByName("rep_pass")[0];
let btn = document.getElementById("signin");

function checkEmail(value) {
  if (email.value.length == 0) {
    return "";
  } else if (
    !/([a-z]+[A-Z]*[\.\-_]*){3,}@([a-z]+[A-Z]*[\.\-_]*){2,}\.([a-z]+[A-Z]*[\.\-_]*){2,}$/.test(
      email.value
    )
  ) {
    return "invalid";
  } else {
    return "valid";
  }
}
email.addEventListener("focus", function () {
  email.className = checkEmail(email.value);
});
email.addEventListener("blur", function () {
  email.className = checkEmail(email.value);
});
email.addEventListener("keyup", function () {
  email.className = checkEmail(email.value);
});

function checkPass(value) {
  if (value.length == 0) {
    return "";
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value)) {
    return "invalid";
  } else {
    return "valid";
  }
}
pass.addEventListener("focus", function () {
  pass.className = checkPass(pass.value);
});
pass.addEventListener("blur", function () {
  pass.className = checkPass(pass.value);
});
pass.addEventListener("keyup", function () {
  pass.className = checkPass(pass.value);
});

function checkRepPass(value) {
  if (value.length == 0) {
    return "";
  } else if (value != pass.value) {
    return "invalid";
  } else {
    return "valid";
  }
}
rep_pass.addEventListener("focus", function () {
  rep_pass.className = checkRepPass(rep_pass.value);
});
rep_pass.addEventListener("blur", function () {
  rep_pass.className = checkRepPass(rep_pass.value);
});
rep_pass.addEventListener("keyup", function () {
  rep_pass.className = checkRepPass(rep_pass.value);
});

btn.addEventListener("click", function () {
  if (rep_pass.value != pass.value) return false;
  else {
    document.cookie = `email = ${email.value}; max-age:3600; path=/`;
    document.cookie = `pass = ${pass.value};  max-age:3600; path=/`;
    document.cookie = `repPass = ${rep_pass.value}; max-age:3600; path=/`;
    document.getElementsByTagName("form")[0].submit();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let cookie = document.cookie;
  if (cookie.length == 0) return;
  var s = cookie.split("; ");
  var cookieObject = {};
  var c;
  for (var i = 0; i < s.length; i++) {
    c = s[i].split("=");
    cookieObject[c[0]] = c[1];
  }
  email.value = cookieObject.email;
  pass.value = cookieObject.pass;
  rep_pass.value = cookieObject.repPass;
  btn.click();
});
