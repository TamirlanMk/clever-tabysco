document.addEventListener('DOMContentLoaded', () => {

    let tabLinks = document.querySelectorAll('.partners__tabs-link');
    let tabs = document.querySelectorAll('.partners__tabs-item');
    let activeTabIndex = 0;

    const removeClass = (items, className) => {
        items.forEach(item => {
            item.classList.remove(className);
        })
    };

    const openTab = (link, tab, links, tabs) => {
        removeClass(links, 'partners__tabs-link--active');
        removeClass(tabs, 'partners__tabs-item--active');

        link.classList.add('partners__tabs-link--active');
        tab.classList.add('partners__tabs-item--active');
    }

    tabLinks.forEach((link, index) => {

        link.onclick = () => {
            let tab = document.querySelector(link.getAttribute('data-tab-id'));

            openTab(link, tab, tabLinks, tabs);
            activeTabIndex = index;
        }
    });
});