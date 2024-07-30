loadContent("index.html");

document.getElementById("aboutBtn").addEventListener("click", function () {
    loadContent("about.html");
});

document.getElementById("contactBtn").addEventListener("click", function () {
    loadContent("contact.html");
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.log('Error:', error));
}
