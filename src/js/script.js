window.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.build__tab');
    const contents = document.querySelectorAll('.build__item');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (e) => {
            let tabsChildren = e.target.parentElement.children;

            for (let j = 0; j < tabsChildren.length; j++) {
                tabsChildren[j].classList.remove('build__tab_active');
            }

            tabs[i].classList.add('build__tab_active');

            let tabContentChildren = e.target.parentElement.nextElementSibling.children;

            for (let k = 0; k < tabContentChildren.length; k++) {
                tabContentChildren[k].classList.remove('build__item_active');
            }

            contents[i].classList.add('build__item_active');
        })
    }

    const tabsProd = document.querySelectorAll('.prod__tab');
    const contentsProd = document.querySelectorAll('.prod__item');

    for (let i = 0; i < tabsProd.length; i++) {
        tabsProd[i].addEventListener('click', (e) => {
            let tabsChildren = e.target.parentElement.children;

            for (let j = 0; j < tabsChildren.length; j++) {
                tabsChildren[j].classList.remove('prod__tab_active');
            }

            tabsProd[i].classList.add('prod__tab_active');

            let tabContentChildren = e.target.parentElement.nextElementSibling.children;

            for (let k = 0; k < tabContentChildren.length; k++) {
                tabContentChildren[k].classList.remove('prod__item_active');
            }

            contentsProd[i].classList.add('prod__item_active');
        })
    }
});