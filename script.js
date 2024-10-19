// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission with Validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Process form (e.g., send to server or show a thank you message)
    alert(`Thank you for your message, ${name}! I will get back to you soon.`);

    // Reset form fields
    event.target.reset();
});

// Image Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightbox.innerHTML = ''; // Clear the inner HTML
});

// Show lightbox with full image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imgClone = document.createElement('img');
        imgClone.src = image.src;
        lightbox.appendChild(imgClone);
        lightbox.classList.add('active');
    });
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightbox.innerHTML = ''; // Clear the inner HTML
});

// Smooth Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.display = 'none';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
