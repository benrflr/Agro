window.addEventListener('DOMContentLoaded', function () {

    function tabs(elem) {
        const tabs = document.querySelectorAll(`.${elem}__tab`);
        const contents = document.querySelectorAll(`.${elem}__item`);

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', (e) => {
                let tabsChildren = e.target.parentElement.children;

                for (let j = 0; j < tabsChildren.length; j++) {
                    tabsChildren[j].classList.remove(`${elem}__tab_active`);
                }

                tabs[i].classList.add(`${elem}__tab_active`);

                let tabContentChildren = e.target.parentElement.nextElementSibling.children;

                for (let k = 0; k < tabContentChildren.length; k++) {
                    tabContentChildren[k].classList.remove(`${elem}__item_active`);
                }

                contents[i].classList.add(`${elem}__item_active`);
            })
        }
    }

    tabs('build');

    /// hamburger

    const menu = document.querySelector('.mobile__menu'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile_active');
    });


});