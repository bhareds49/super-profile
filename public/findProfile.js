var url = document.location.href;
user = url.substring(url.lastIndexOf("/") + 1, url.length);
console.log(user);
if (
  user &&
  user != " " &&
  user != "index.html" &&
  user != "editProfile.html" &&
  user != "findProfile.html"
) {
  fetch("http://127.0.0.1:5000/api/users/" + user)
    .then((response) => response.json())
    .then(function (data) {
      if (!data.username) {
        document.getElementById("api-test").innerHTML =
          "That screename does not exist, try another one!";
          setTimeout(function () {
            document.getElementById("api-test").innerHTML = "";
          }, 2000);
      } else {
        document.getElementById("api-test").innerHTML = data.username;
        document.getElementById("profile-title").innerHTML =
          "SuperProfile - " + data.username;
      }
    });
}

document.getElementById("test-btn").addEventListener("click", function () {
  const username = document.getElementById("username-input").value;
  fetch("http://127.0.0.1:5000/api/users/" + username)
    .then((response) => response.json())
    .then(function (data) {
      if (!data.username) {
        document.getElementById("api-test").innerHTML =
          "That screename does not exist, try another one!";
          setTimeout(function () {
            document.getElementById("api-test").innerHTML = "";
          }, 2000);
      } else {
        document.getElementById("api-test").innerHTML = data.username;
        document.getElementById("username-input").innerHTML = " ";
        document.getElementById("profile-title").innerHTML =
          "SuperProfile - " + data.username;
        setTimeout(function () {
          document.getElementById("api-test").innerHTML = "";
        }, 2000);
      }
    });
});

const token = localStorage.getItem("token");
if(!token){
  //addclass to edit profile button
  document.getElementById("edit-profile-btn").classList.add("hidden");
  document.getElementById("logout-btn").classList.remove("save-btn");
  document.getElementById("logout-btn").classList.add("hidden");
  document.getElementById("login-btn").classList.remove("hidden");
}

//logout function
document.getElementById("logout-btn").addEventListener("click", function () {
  localStorage.removeItem("token");
  //reload
  location.reload();
});