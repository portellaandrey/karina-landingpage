document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(
        '.reveal, .animate-left, .animate-right, .service-card'
    );

    const reveal = () => {
        const height = window.innerHeight;

        elements.forEach(el => {
            if (el.getBoundingClientRect().top < height - 120) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    setTimeout(() => {
        document.querySelectorAll('.hero .reveal')
            .forEach(el => el.classList.add('active'));
    }, 150);
});

const style = document.createElement('style');
style.innerHTML = `
.reveal, .animate-left, .animate-right, .service-card {
    opacity: 0;
    transform: translateY(24px);
    transition: 0.8s ease;
}
.active {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);
