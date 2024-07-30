document.addEventListener("DOMContentLoaded", function () {
    loadContent("home.html");
});

document.getElementById("homeBtn").addEventListener("click", function () {
    loadContent("home.html");
});

document.getElementById("servicesBtn").addEventListener("click", function () {
    loadContent("services.html");
});

document.getElementById("aboutBtn").addEventListener("click", function () {
    loadContent("about.html");
});

document.getElementById("contactBtn").addEventListener("click", function () {
    loadContent("contact.html");
});

document.getElementById("testimonialsBtn").addEventListener("click", function () {
    loadContent("testimonials.html");
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.log('Error:', error));
}
