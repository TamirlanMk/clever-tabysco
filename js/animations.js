document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) {
        if (document.querySelectorAll(".fade-out").length) {
            gsap
                .timeline()
                .from('.fade-out', {
                    xPercent: 100,
                    opacity: 0,
                    duration: 2
                });
        }

        if (document.querySelector(".hero--second-page")) {
            gsap
                .timeline()
                .from('.warehouse-img', {
                    scale: .33,
                    duration: 1.1
                });
        }
    }
});