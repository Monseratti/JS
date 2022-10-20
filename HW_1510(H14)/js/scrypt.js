// Cookie accessor
function setCookie(name, value, options = {}) {
  options = {
    path: "/",
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
    "max-age": -1,
  });
}
// end Cookie accessor

// html variables
let btn = document.getElementById("btn");
let container = document.getElementsByClassName("container")[0];
// end html variables

// form variables
let myName = document.getElementsByName("colorName")[0];
let myType = document.getElementsByName("colorType")[0];
let myCode = document.getElementsByName("colorValue")[0];
let colArray = [];
// end form variables

// check NAME
function checkName() {
  if (!/^[A-Za-z\s]+$/.test(myName.value)) {
    myName.classList.remove("valid");
    myName.classList.add("invalid");
    btn.disabled = true;
  } else {
    for (let element of colArray) {
      if (element.colorName.toUpperCase() == myName.value.toUpperCase()) {
        myName.classList.remove("valid");
        myName.classList.add("invalid");
        btn.disabled = true;
        return;
      }
    }
    myName.classList.remove("invalid");
    myName.classList.add("valid");
    btn.disabled = false;
  }
}
myName.addEventListener("keyup", checkName);
myName.addEventListener("focus", checkName);
myName.addEventListener("blur", checkName);
// end check NAME

// check TYPE
function checkType(colCode = myCode.value, colType = myType.value) {
  if (colType == "rgb") return `rgb(${colCode})`;
  else if (colType == "rgba") return `rgba(${colCode})`;
  else return colCode;
}
// end check TYPE

// check CODE
function checkCode() {
  if (myType.value == "rgb") {
    if (!/[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/.test(myCode.value)) {
      myCode.classList.remove("valid");
      myCode.classList.add("invalid");
      btn.disabled = true;
    } else {
      for (let element of myCode.value.split(",")) {
        if (element > 255) {
          myCode.classList.remove("valid");
          myCode.classList.add("invalid");
          btn.disabled = true;
          return;
        }
      }
      myCode.classList.remove("invalid");
      myCode.classList.add("valid");
      btn.disabled = false;
    }
  } else if (myType.value == "rgba") {
    if (!/[0-9]{1,3},[0-9]{1,3},[0-9]{1,3},0?\.?[0-9]+$/.test(myCode.value)) {
      myCode.classList.remove("valid");
      myCode.classList.add("invalid");
      btn.disabled = true;
    } else {
      let str = myCode.value.split(",");
      for (let i = 0; i < str.length; i++) {
        if (i < 3) {
          if (str[i] > 255) {
            myCode.classList.remove("valid");
            myCode.classList.add("invalid");
            btn.disabled = true;
            return;
          }
        } else {
          if (str[i] > 1) {
            myCode.classList.remove("valid");
            myCode.classList.add("invalid");
            btn.disabled = true;
            return;
          }
        }
      }
      myCode.classList.remove("invalid");
      myCode.classList.add("valid");
      btn.disabled = false;
    }
  } else {
    if (!/^#[a-fA-F0-9]{6}$/.test(myCode.value)) {
      myCode.classList.remove("valid");
      myCode.classList.add("invalid");
      btn.disabled = true;
    } else {
      myCode.classList.remove("invalid");
      myCode.classList.add("valid");
      btn.disabled = false;
    }
  }
}
myType.addEventListener("change", checkCode);

myCode.addEventListener("keyup", checkCode);
myCode.addEventListener("focus", checkCode);
myCode.addEventListener("blur", checkCode);
// end check CODE

// btn EVENT
function addColor(
  e = null,
  colorName = myName.value,
  colType = myType.value,
  colCode = myCode.value
) {
  let bgColor = checkType(colCode, colType);
  //background DIV
  let color = document.createElement("div");
  color.className = "color";
  color.style.backgroundColor = bgColor;
  //title DIV
  let title = document.createElement("div");
  title.className = "title";
  title.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
  //title TEXT
  //name
  let tmp = document.createElement("p");
  tmp.innerHTML = colorName;
  title.appendChild(tmp);
  //end name
  //type
  tmp = document.createElement("p");
  tmp.innerHTML = colType.toUpperCase();
  title.appendChild(tmp);
  //end type
  //code
  tmp = document.createElement("p");
  tmp.innerHTML = `<b>${colCode}</b>`;
  //end code
  //end title TEXT
  title.appendChild(tmp);
  //end title DIV
  color.appendChild(title);
  //end background DIV
  container.appendChild(color);
  colArray.push({
    colorName: colorName,
    colType: colType,
    colCode: colCode,
  });
  // save Cookie
  setCookie("colArray", JSON.stringify(colArray), { "max-age": 3600*3 });
  // end save Cookie
  checkName();
}
btn.addEventListener("click", addColor);
// end btn EVENT

document.addEventListener("DOMContentLoaded", function () {
  if (typeof getCookie("colArray") == "undefined") return;
  let colorNameArray = getCookie("colArray");
  for (let element of JSON.parse(colorNameArray)) {
    addColor(null, element.colorName, element.colType, element.colCode);
  }
});

document.getElementById("btnDel").addEventListener("click", function () {
  deleteCookie("colArray");
});
