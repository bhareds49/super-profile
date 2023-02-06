//document.getElementById('js-test').innerHTML = 'The test.js file loaded';

var url = document.location.href;
user = url.substring(url.lastIndexOf("/") + 1, url.length);
console.log(user);
if (user && user != " " && user != "index.html" && user != "getProfile.html") {
  fetch("http://127.0.0.1:5000/api/users/" + user)
    .then((response) => response.json())
    .then(function (data) {
      if (!data.username) {
        document.getElementById("api-test").innerHTML =
          "That screename does not exist, try another one!";
      } else {
        document.getElementById("api-test").innerHTML = data.username;
        document.getElementById("profile-title").innerHTML =
          "SuperProfile - " + data.username;
      }
    });
} 

/* document.getElementById("test-btn").addEventListener("click", function () {
  const username = document.getElementById("username-input").value;
  fetch("http://127.0.0.1:5000/api/users/" + username)
    .then((response) => response.json())
    .then(function (data) {
      if (!data.username) {
        document.getElementById("api-test").innerHTML =
          "That screename does not exist, try another one!";
      } else {
        document.getElementById("api-test").innerHTML = data.username;
        document.getElementById("username-input").innerHTML = " ";
        document.getElementById("profile-title").innerHTML =
          "SuperProfile - " + data.username;
      }
    });
}); */

document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("pass-input").value;
  fetch("http://localhost:5000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then(function (data) {
      if (!data.token) {
        document.getElementById("token-test").innerHTML = "Wrong credentials";
      } else {
        localStorage.setItem("token", data.token);
        //location.reload();
        //go to editProfile.html
        window.location.href = "http://localhost:1234/editProfile.html";
      }
    });
});

//when authenticated, a jwt token is stored in local storage
const token = localStorage.getItem("token");

//this function parses the token and returns the user id
function parseJWT(token) {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const decoded = JSON.parse(jsonPayload);
  return decoded.user.id;
}

if (token) {
  console.log(parseJWT(token));
}

//this function logsout the user by destorying the token
document.getElementById("logout-btn").addEventListener("click", function () {
  localStorage.removeItem("token");
  location.reload();
});

//this function shows the text editor if the user is logged in
if (token) {
  document.getElementById("token-test").innerHTML =
    "we in here  -   " + localStorage.getItem("token");
  document.getElementById("editor-block").classList.remove("hidden");
  document.getElementById("editor-block").classList.add("editor-block");
  document.getElementById("save-btn").classList.remove("hidden");
  document.getElementById("save-btn").classList.add("save-btn");
} else {
  document.getElementById("token-test").innerHTML = "token not here";
}

//use the fetch api to make a post request with email and password body
