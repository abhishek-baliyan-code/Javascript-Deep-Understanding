const pTag = document.querySelector(".cal-output");
const btnTag = document
    .querySelector(".calculator-container")
    .addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            pTag.innerHTML = `${event.target.innerHTML}`;
        }
    });
