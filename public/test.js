//document.getElementById('js-test').innerHTML = 'The test.js file loaded';

document.getElementById("test-btn").addEventListener("click", function () {
  const username = document.getElementById("username-input").value;
  fetch("http://127.0.0.1:5000/api/users/" + username)
    .then((response) => response.json())
    .then(function (data) {
      if (!data.username) {
        document.getElementById("api-test").innerHTML =
          "That screename does not exist, try another one!";
      } else {
        document.getElementById("api-test").innerHTML = data.username;
      }
    });
});

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
          document.getElementById("login-test").innerHTML =
            "Wrong credentials";
        } else {
          document.getElementById("login-test").innerHTML = "Logged In!";
        }})
});

//use the fetch api to make a post request with email and password body
