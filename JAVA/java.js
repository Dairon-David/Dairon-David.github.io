document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.querySelector('.search-icon');
    const userIcon = document.querySelector('.user-icon');



    userIcon.addEventListener('click', function() {
        // Add functionality for user icon if needed
    });

    // Example: Toggle nav links on small screens
    document.querySelector('.logo').addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});


const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

document.querySelector('.carousel-next').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
});