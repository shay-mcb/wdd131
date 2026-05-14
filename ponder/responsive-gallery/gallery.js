//start by setting variables from html
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
//why do these last 2 have modal instead of document?
//it basically takes a portion of the screen, so breaks the DOM into smaller pieces
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
// Event listener is added to the section (gallery) not each image
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e' 
// use .target to show a specific target element on the page under inspect
// we do this so that when we click on the picture, it pops up with the actual picture we clicked on  
    console.log(e.target.src);
    let imageSrc = e.target.src;

    // select img tag inside dialog, give it src
    // element out of the DOM + .attribute --> .replace allows you to replace the small picture with a larger one when blown up
    modalImage.src = imageSrc.replace("-sm.jpg", "-full.jpg");

    // typeof() helps you know what type of element this is
    //console.log(typeof(imageSrc));

    // nothing will happen unless we show the modal because it's hidden by default
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          