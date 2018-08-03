const focusBtn = document.getElementById("focus");
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button-2");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
closeButton2.addEventListener("click", toggleModal)
focusBtn.addEventListener("click", function () {
    const focusLink = document.getElementById("focus-link");
    focusLink.focus();
})