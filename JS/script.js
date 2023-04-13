// JS for the Video Pages

// Changing the video in the video player

const mainVideo = document.querySelector(".main-video");
let videos = document.querySelectorAll(".thumbnails");

for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener('click', function(changeVideo) {
      let clickedThumbnail = this.getAttribute("data-value");
      mainVideo.src = clickedThumbnail;
    }
  )}


// Changing the poster attribute of the video element with the src of the thumbnail that was clicked

// let smallThumbnail = document.querySelectorAll(".thumbnails");

// for (let i = 0; i < smallThumbnail.length; i++) {
//   smallThumbnail[i].addEventListener('click', function(changeThumbnail) {
//       let clickedThumbnail = this.src;
    
//       mainVideo.poster = clickedThumbnail;
//     }
//   )}

// Clicking a thumbnail in the video pages and showing which video thumbnail is active while deactiving the previous video


// Cycling through the thumbnails
function toggleItem(elem) {
  for (let i = 0; i < elem.length; i++) {
    // Clicking a thumbnail
    elem[i].addEventListener("click", function(e) {
      // The thumbnail that was clicked on
      let current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          // Removes the active class from anything that had it
          elem[i].classList.remove('selected-thumbnail');
          // Adds the active class to what was clicked on
        } else if (current.classList.contains('selected-thumbnail') === true) {
          current.classList.remove('selected-thumbnail');
        } else {
          // Removes the active class when clicking something else
          current.classList.add('selected-thumbnail')
        }
      }
      e.preventDefault();
    });
  };
}
toggleItem(document.querySelectorAll('.thumbnails'));

// Hamburger Menu

const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close");

const sideMenu = document.getElementById("side-menu");

hamburger.addEventListener("click", function () {
  sideMenu.classList.add("show-menu");
  hamburger.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  sideMenu.classList.remove("show-menu");
  hamburger.style.display = "block";
  close.style.display = "none";
});

// Contact Us Form





  
