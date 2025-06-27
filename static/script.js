document.addEventListener('DOMContentLoaded', (event) => {
    const badge = document.getElementById('hi');
    const text = badge.textContent;
    badge.textContent = ''; // Clear the badge text before starting the typing effect

    typeEffect(badge, text);
});

function typeEffect(badge, text) {
    let index = 0;
    const speed = 100; // Speed of typing effect in milliseconds

    function type() {
        if (index < text.length) {
            badge.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Hide the badge after the typing effect is completed
            setTimeout(() => {
                badge.style.display = 'none';
            }, 1000); // Delay before hiding (adjust if needed)
        }
    }

    // Start typing effect after displaying the badge
    badge.style.display = 'block'; // Make sure the badge is visible
    type();
}


