// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. 
// Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// top: 0 → scrolls to the very top of the page
// behavior: "smooth" → enables smooth animation

document.getElementById("scrollBtn").addEventListener("click", smoothScrollToTop);