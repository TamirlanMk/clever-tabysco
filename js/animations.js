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

        if (document.querySelectorAll(".fade-out-1").length) {
            gsap
                .timeline()
                .from('.fade-out-1', {
                    xPercent: 100,
                    opacity: 0,
                    duration: 1.3
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

        if (document.querySelector(".hero--fourth-page")) {
            gsap
                .timeline()
                .from('.fade-out-left', {
                    xPercent: -100,
                    opacity: 0,
                    duration: 1.3
                });
        }
    }
});