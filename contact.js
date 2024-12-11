// File input functionality (display file name when selected)
document.getElementById('file').addEventListener('change', function(event) {
    const fileName = event.target.files.length > 0 ? event.target.files[0].name : 'No file chosen';
    document.getElementById('fileName').textContent = fileName;
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll - hide header
        header.style.transform = 'translateY(-100%)'; // Move header up
    } else if (scrollTop < lastScrollTop && scrollTop > 100) {
        // Upscroll - show header if scrolled down more than 100px
        header.style.transform = 'translateY(0)'; // Move header back
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});