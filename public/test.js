

document.getElementById('js-test').innerHTML = 'The test.js file loaded';

document.getElementById("test-btn").addEventListener("click", function () {
    fetch('http://127.0.0.1:5000/')
    //fetch("https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8")
    //stringify the response
    .then((response) => response.text())
    .then((data) => document.getElementById('api-test').innerHTML = data);
})




