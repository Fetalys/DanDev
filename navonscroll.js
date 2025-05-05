const navLinks = document.querySelectorAll('nav ul li a');

const socialIcons = document.querySelector('.social-icons');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        if (link.classList.contains('contact')) {
            socialIcons.classList.add('glow');
            setTimeout(() => {
                socialIcons.classList.remove('glow');
            }, 5000);
        }
    });
});