// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Solution Categories
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryType = category.dataset.category;
        loadSolutions(categoryType);
    });
});

function loadSolutions(category) {
    // Implement solution loading logic here
    console.log(`Loading solutions for ${category}`);
}

// Form Submissions
const signupForm = document.querySelector('.signup-form');
const contactForm = document.querySelector('.contact-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement signup form submission logic
    console.log('Signup form submitted');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement contact form submission logic
    console.log('Contact form submitted');
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Load Events Dynamically
function loadEvents() {
    const eventsList = document.querySelector('.events-list');
    // Sample events data - replace with actual API call
    const events = [
        {
            title: 'Climate Action Summit 2024',
            date: '2024-06-15',
            location: 'Virtual Event'
        },
        {
            title: 'Local Beach Cleanup',
            date: '2024-07-01',
            location: 'City Beach'
        }
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event-card');
        eventElement.innerHTML = `
            <h4>${event.title}</h4>
            <p>${event.date}</p>
            <p>${event.location}</p>
        `;
        eventsList.appendChild(eventElement);
    });
}

// Load Technology Showcase
function loadTechnologies() {
    const techShowcase = document.querySelector('.tech-showcase');
    // Sample technology data - replace with actual API call
    const technologies = [
        {
            name: 'Solar Power Innovation',
            description: 'Next-generation solar panels with 40% higher efficiency',
            image: 'images/solar-tech.jpg'
        },
        {
            name: 'Carbon Capture',
            description: 'Advanced carbon capture and storage technology',
            image: 'images/carbon-capture.jpg'
        }
    ];

    technologies.forEach(tech => {
        const techElement = document.createElement('div');
        techElement.classList.add('tech-card');
        techElement.innerHTML = `
            <img src="${tech.image}" alt="${tech.name}">
            <h4>${tech.name}</h4>
            <p>${tech.description}</p>
        `;
        techShowcase.appendChild(techElement);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    loadTechnologies();
});