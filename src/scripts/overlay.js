const openButton = document.querySelectorAll("#send__reviews");
const overlayElement = document.querySelector(".overlay");
const closeElement = overlayElement.querySelector(".overlay__close");
const overlayContent = document.querySelector(".overlay__content");
const reviewContent = document.querySelectorAll(".review__content")


openButton.forEach(function(button) { 
    button.addEventListener("click", function() {
        reviewContent.forEach(function(reviewContent) {
            overlayContent.innerHTML = reviewContent.innerHTML;
            overlayElement.style.display = "flex";
        })
});
})

closeElement.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElement.style.display = "none";
});

overlayElement.addEventListener("click", function(e) {
  if (e.target === overlayElement) {
    closeElement.click();
  }
});
