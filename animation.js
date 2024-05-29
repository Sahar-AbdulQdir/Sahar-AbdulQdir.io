// Create an observer to detect when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Add or remove the 'show' class based on visibility
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  // Get all elements with the class 'hidden' and observe them
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  // Run the script when the page is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
      // Add the 'loaded' class to the body after 2 seconds
      setTimeout(function() {
          document.body.classList.add("loaded");
      }, 2000); // 2 seconds
  });