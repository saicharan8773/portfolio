let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    // Event listener for menu icon click
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Handle form submission
    // Handle form submission
// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;

    // Log form data for debugging
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Use the Fetch API to submit the form data
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log(response); // Log the response for debugging
        if (response.ok) {
            // Show confirmation message
            const confirmationMessage = document.querySelector('.confirmation-message');
            confirmationMessage.style.display = 'block'; // Show message
            confirmationMessage.classList.add('fade-in'); // Add class for fade-in effect
            form.reset(); // Reset the form fields

            // Hide confirmation message after 6 seconds
            setTimeout(() => {
                confirmationMessage.style.display = 'none'; // Hide the message
                confirmationMessage.classList.remove('fade-in'); // Remove fade-in class
            }, 6000); // 6000 milliseconds = 6 seconds
        } else {
            return response.json().then(errorData => {
                alert(`Error: ${errorData.message || 'There was a problem with your submission. Please try again.'}`);
            });
        }
    })
    .catch(error => {
        console.error('Fetch error:', error); // Log any fetch errors
        alert('There was a problem with your submission. Please try again.');
    });

    return false; // Prevent the default form submission
}

// Add the form submission event listener to your form
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);



    // DOMContentLoaded to ensure the code runs after the page is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        // Add scroll event listener
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;

            // Highlight active nav link based on scroll position
            sections.forEach(section => {
                let sectionTop = section.offsetTop - 150;
                let sectionHeight = section.offsetHeight;
                let sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
                }
            });

            // Sticky header effect
            let header = document.querySelector('header');
            header.classList.toggle('sticky', scrollY > 100);

            // Close menu when scrolling
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });

        // Toggle 'Read More' text
        const readMoreBtn = document.getElementById('read-more-btn');
        readMoreBtn.addEventListener('click', function() {
            const readMoreText = document.getElementById('read-more-text');
            if (readMoreText.style.display === 'none' || readMoreText.style.display === '') {
                readMoreText.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                readMoreText.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });

        // Scroll reveal animations
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .Skill-container, .Project-box, .Contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    });

    // Add the form submission event listener to your form
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
    function showConfirmationMessage() {
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block'; // Show the message
        
        setTimeout(() => {
            confirmationMessage.style.display = 'none'; // Hide after 3 seconds
        }, 3000); // Adjust the time as needed
    }
    
    // Example of usage, call this function where appropriate (like after a form submission)
    document.getElementById('yourForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demonstration
        // Your form submission logic here...
        showConfirmationMessage();
    });
    