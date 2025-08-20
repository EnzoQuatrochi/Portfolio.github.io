window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY === 0) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(-100%)';
    }
    
    if (currentScrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});