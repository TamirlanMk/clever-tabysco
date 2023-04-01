document.addEventListener('DOMContentLoaded', () => {

    let tabLinks = document.querySelectorAll('.partners__tabs-link');
    let tabs = document.querySelectorAll('.partners__tabs-item');
    let prev = document.querySelector('.partners__tabs-control .prev');
    let next = document.querySelector('.partners__tabs-control .next');
    let activeTabIndex = 0;
    const removeClass = (items, className) => {
        items.forEach(item => {
            item.classList.remove(className);
        })
    };

    tabLinks.forEach((link, index) => {

        link.onclick = () => {
            let tab = document.querySelector(link.getAttribute('data-tab-id'));

            activeTabIndex = index;

            removeClass(tabLinks, 'partners__tabs-link--active');
            link.classList.add('partners__tabs-link--active');

            removeClass(tabs, 'partners__tabs-item--active');
            tab.classList.add('partners__tabs-item--active');
        }
    });

    next.onclick = () => {
        let newTabIndex = (activeTabIndex + 1) + 1 > tabLinks.length ? 0 : activeTabIndex + 1;

        removeClass(tabLinks, 'partners__tabs-link--active');
        tabLinks[newTabIndex].classList.add('partners__tabs-link--active');

        removeClass(tabs, 'partners__tabs-item--active');
        tabs[newTabIndex].classList.add('partners__tabs-item--active');

        activeTabIndex = newTabIndex;


    }

    prev.onclick = () => {
        let newTabIndex = (activeTabIndex - 1) < 0 ? tabLinks.length - 1 : activeTabIndex - 1;

        removeClass(tabLinks, 'partners__tabs-link--active');
        tabLinks[newTabIndex].classList.add('partners__tabs-link--active');

        removeClass(tabs, 'partners__tabs-item--active');
        tabs[newTabIndex].classList.add('partners__tabs-item--active');

        activeTabIndex = newTabIndex;
    }

});