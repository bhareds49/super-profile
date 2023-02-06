

//when authenticated, a jwt token is stored in local storage
const token = localStorage.getItem("token");

//this function shows the text editor if the user is logged in
if (token) {
    document.getElementById("editor-block").classList.remove("hidden");
    document.getElementById("editor-block").classList.add("editor-block");
    document.getElementById("save-btn").classList.remove("hidden");
    document.getElementById("save-btn").classList.add("save-btn");
  } else {
    document.getElementById("profile-title").innerHTML =  "how did you get here? try logging in, bru.";
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
  document.getElementById("profile-title").innerHTML = "SuperProfile - " + parseJWT(token);
  console.log(parseJWT(token));
}
  