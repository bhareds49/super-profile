//when authenticated, a jwt token is stored in local storage
const token = localStorage.getItem("token");

//this function shows the text editor if the user is logged in
if (token) {
  document.getElementById("editor-block").classList.remove("hidden");
  document.getElementById("editor-block").classList.add("editor-block");
  document.getElementById("save-btn").classList.remove("hidden");
  document.getElementById("save-btn").classList.add("save-btn");
} else {
  document.getElementById("profile-title").innerHTML =
    "how did you get here? try logging in, bru.";
}

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
  fetch("http://127.0.0.1:5000/api/users/id/" + parseJWT(token))
    .then((response) => response.json())
    .then(function (data) {
        console.log(data[0].username);
        document.getElementById("profile-title").innerHTML =
          "SuperProfile - " + data[0].username;
      });
}

//save btn
document.getElementById("save-btn").addEventListener("click", function () {
  console.log('save btn clicked');
});


//logout function
document.getElementById("logout-btn").addEventListener("click", function () {
  localStorage.removeItem("token");
  window.location.href = "http://localhost:1234/index.html";
});