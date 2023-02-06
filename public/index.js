var url = document.location.href;
user = url.substring(url.lastIndexOf("/") + 1, url.length);
console.log(user);
if (
  user &&
  user != " " &&
  user != "index.html" &&
  user != "findProfile.html" &&
  user != "editProfile.html" &&
  user != "login.html"
) {
  fetch("http://127.0.0.1:5000/api/users/" + user)
    .then((response) => response.json())
    .then(function (data) {
      if (!data.username) {
        console.log('no screename!');
      } else {
        window.location.href = "http://localhost:1234/findProfile.html";
        document.getElementById("api-test").innerHTML = data.username;
        document.getElementById("profile-title").innerHTML =
          "SuperProfile - " + data.username;
      }
    });
} 