document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function closePopup() {
    // Assuming you're using a modal, find and hide the modal or popup.
    var popup = document.querySelector('.your-popup-selector'); // Replace with your actual popup selector.
    if (popup) {
        popup.style.display = 'none'; // Or use a proper hide function based on your popup implementation.
    }

    // Optionally scroll to the events section smoothly.
    document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
}
