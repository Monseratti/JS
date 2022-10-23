let btn = document.getElementById("btn");

function fillData() {
  let userName = document.getElementById("userName").value;
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("GET", `https://api.github.com/users/${userName}`);
  request.responseType = "json";
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      let resault = request.response;
      document.getElementById("avatar").style.backgroundImage = `url(${resault.avatar_url})`;
      document.getElementById("name").innerHTML = `Name: <b>${resault.name}</b>`;
      document.getElementById("login").innerHTML = `Login: <b>${resault.login}</b>`;
      document.getElementById("gitUrl").innerHTML = `Url to GitHub: <b>${resault.html_url}</b>`;
      document.getElementById("city").innerHTML = `City: <b>${resault.location}</b>`;
      document.getElementById("email").innerHTML = `Email:<b>${resault.email==null?"No Email":resault.email}</b>`;
      document.getElementById("folower").innerHTML = `Follower: <b>${resault.followers}</b>`;
      document.getElementById("folowing").innerHTML = `Following: <b>${resault.following}</b>`;
    }
  };
  request.send();
}

btn.addEventListener("click", fillData);
