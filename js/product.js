// Reveal

function reveal1() {
    var reveals = document.querySelectorAll(".reveal");
  
      var windowHeight = window.innerHeight;
      var elementTop = reveals[0].getBoundingClientRect().top;
      var elementVisible = 0;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[0].classList.add("active");
      } else {
        reveals[0].classList.remove("active");
      }
  }
  
      function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 1; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("load", reveal1);
  window.addEventListener("scroll", reveal);
