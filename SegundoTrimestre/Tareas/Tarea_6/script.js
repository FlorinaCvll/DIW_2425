document.addEventListener('DOMContentLoaded', () => {
    const butterfly = document.querySelector('.butterfly');

    gsap.set(butterfly, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        transformOrigin: '50% 50%'
    });

    gsap.to('.wing-left', {
        rotation: 45,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
    });

    gsap.to('.wing-right', {
        rotation: -45,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
    });

    function animateButterfly() {
        gsap.to(butterfly, {
            duration: 5,
            x: () => Math.random() * window.innerWidth,
            y: () => Math.random() * window.innerHeight,
            ease: 'power1.inOut',
            onComplete: animateButterfly
        });
    }

    animateButterfly();
});
