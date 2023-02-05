

document.getElementById('js-test').innerHTML = 'The test.js file loaded';

document.getElementById("test-btn").addEventListener("click", function () {
    fetch('http://127.0.0.1:5000/api/users/bharat5')
    .then((response) => response.json())
    .then((data) => document.getElementById('api-test').innerHTML = data.username);
})




