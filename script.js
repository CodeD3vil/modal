// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = () => {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

// When the user presses the Escape key modal window will close
window.onkeyup = (e) => {
    if (e.key === "Escape") modal.style.display = "none";
};
