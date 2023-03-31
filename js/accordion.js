document.addEventListener('DOMContentLoaded', () => {

    let accordions = document.querySelectorAll('.partners__accordion-item');

    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__body");
        accordion.classList.add("partners__accordion-item__active");
        content.style.maxHeight = content.scrollHeight + "px";
    };

    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__body");
        accordion.classList.remove("partners__accordion-item-item__active");
        content.style.maxHeight = null;
    };

    accordions.forEach(accordion => {
        let header = accordion.querySelector('.accordion__header');
        let content = accordion.querySelector('.accordion__body');

        if (window.screen.width >= 768) {
            console.log(12)
            accordion.onmouseover = () => {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
            accordion.onmouseleave = () => {
                closeAccordion(accordion);
            }
        } else {
            console.log(21)
            header.onclick = () => {
                if (content.style.maxHeight) {
                    closeAccordion(accordion);
                } else {
                    accordions.forEach((accordion) => closeAccordion(accordion));
                    openAccordion(accordion);
                }
            }
        }
    });
});