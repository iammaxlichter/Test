// Function to handle the fade-in effect for images
function fadeInView() {
    var content = document.querySelectorAll('.fade-in-view');

    // Loop through each image
    content.forEach(function(content) {
        // Check if the image is in the viewport
        if (isInViewport(content)) {
            // Add the class to trigger the fade-in animation
            content.classList.add('fade-in-view-active');
        }
    });
}


// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Call the fadeInImages function when the page is scrolled
window.addEventListener('scroll', fadeInView);

// Trigger the fadeInImages function once when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Call the function immediately
    fadeInView();
    // Call the function again after a short delay (e.g., 500ms) to ensure images outside the initial viewport also have a chance to fade in
    setTimeout(fadeInImages, 200);
});