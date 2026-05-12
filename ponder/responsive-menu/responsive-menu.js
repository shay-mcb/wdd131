//focused on allowing the menu button to open up into a toggle menu//

let menuButton = document.getElementsByClassName("menu-btn")[0];
// this returns a list and will freak out if array is not specified, which is why we added [0] //
console.log(menuButton);

// event listener (event type, function)
menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event);
    // toggle on/off the menu display

    //grab the nav from the DOM
    let nav = document.querySelector("nav");
    // toggle the .hide class on/off
    nav.classList.toggle("hide");
    // profit
    menuButton.classList.toggle("change");
    // this right here makes the animation work
}
    