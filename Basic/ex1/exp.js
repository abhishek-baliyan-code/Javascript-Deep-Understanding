const button = document.querySelector(".my-button");

button.addEventListener("click", function () {
    alert("Hello, There...");
});

// Another

document
    .querySelector(".btn-container")
    .addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            alert(`It's number ${event.target.innerText}.`);
        }
        event.stopPropagation();
    });
