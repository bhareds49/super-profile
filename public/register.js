document.getElementById("register-btn").addEventListener("click", function () {
    const username = document.getElementById("username-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("pass-input").value;
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then(function (data) {
        if (!data.token) {
          document.getElementById("reg-test").innerHTML = "registration failed";
        } else {
          localStorage.setItem("token", data.token);
          //location.reload();
          //go to editProfile.html
          window.location.href = "http://localhost:1234/editProfile.html";
        }
      });
  });