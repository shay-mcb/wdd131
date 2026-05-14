const gallery = document.querySelector(".images");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

// Open Modal
function openModal(event) {
    let imageSrc = event.target.src;
    modalImage.src = imageSrc.replace("https://wddbyui.github.io/wdd131/images/norris-sm.jpg", "https://wddbyui.github.io/wdd131/images/norris-full.jpg");
    modal.showModal();
}

// Close Modal
closeButton.addEventListener("click", () => {
    modal.close();
})

// Close modal when clicked outside image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Menu Button
let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
}