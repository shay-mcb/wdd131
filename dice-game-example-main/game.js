// when the button is clicked
// change all the die images to the gif animation

document.getElementById("rollButton").addEventListener("click", event => {
    // get the images
    const images = document.querySelectorAll("#gameboard img");
    // change the src
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif"
        }
    });

    // wait one second, then call this anonymous function
    setTimeout(() => {
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 1000);
});

function isDieUnlocked(dieImage) {
    // retrieve list of checkboxes
    const checkboxes = document.querySelectorAll("#gameboard input");
    // filter out checked
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked); // ! at the beginning means "not"
    // compare list to dieImage, if there's a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}   