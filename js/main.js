document.addEventListener('DOMContentLoaded', () => {
    if (typeof Lenis !== 'undefined') {
        new Lenis({
            autoRaf: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 40,
            duration: 850,
            easing: 'ease-out-cubic'
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        const toggleIcon = menuToggle.querySelector('i');
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            const isOpen = mobileMenu.classList.toggle('menu-open');
            if (isOpen) {
                mobileMenu.classList.add('pt-3', 'pb-6');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-bars');
                    toggleIcon.classList.add('fa-xmark');
                }
            } else {
                mobileMenu.classList.remove('pt-3', 'pb-6');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                }
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('menu-open');
                mobileMenu.classList.remove('pt-3', 'pb-6');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
