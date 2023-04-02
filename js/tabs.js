document.addEventListener('DOMContentLoaded', () => {

    let tabLinks        = document.querySelectorAll('.partners__tabs-link');
    let tabs            = document.querySelectorAll('.partners__tabs-item');
    let prev            = document.querySelector('.partners__tabs-control .prev');
    let next            = document.querySelector('.partners__tabs-control .next');
    let activeTabIndex  = 0;

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

    next.onclick = () => {
        let nextTabIndex = (activeTabIndex + 1) + 1 > tabLinks.length ? 0 : activeTabIndex + 1;

        openTab(tabLinks[nextTabIndex], tabs[nextTabIndex], tabLinks, tabs);
        activeTabIndex = nextTabIndex;
    }

    prev.onclick = () => {
        let prevTabIndex = (activeTabIndex - 1) < 0 ? tabLinks.length - 1 : activeTabIndex - 1;

        openTab(tabLinks[prevTabIndex], tabs[prevTabIndex], tabLinks, tabs);
        activeTabIndex = prevTabIndex;
    }

});