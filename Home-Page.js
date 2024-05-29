// Run the script when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all <h1> elements inside elements with the class "numbers"
    let valueDisplays = document.querySelectorAll(".numbers h1");
    // Animation duration in milliseconds
    let duration = 4000;

    // Loop through each element
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.textContent);
        let startTime;

        // Function to animate the counting
        function animateCount(timestamp) {
            // Set start time if not set
            if (!startTime) startTime = timestamp;

            // Calculate progress
            let progress = timestamp - startTime;

            // Calculate current value
            let currentValue = Math.floor((progress / duration) * endValue);

            // Update the element's text
            valueDisplay.textContent = currentValue;

            // Continue animation if not done
            if (currentValue < endValue) {
                requestAnimationFrame(animateCount);
            }
        }

        // Start the animation
        requestAnimationFrame(animateCount);
    });
});


// animation on scroll

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
