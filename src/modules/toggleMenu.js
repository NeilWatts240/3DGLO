const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body'),
        closeBtn = document.querySelector('.close-btn'),
        items = document.querySelector('ul').querySelectorAll('li');

    const handlerMenu = () => {

        menu.classList.toggle('active-menu');

    };
    const MenuScroll = () => {

        const goTo = [
            document.querySelector('#service-block').getBoundingClientRect().top,
            document.querySelector('#portfolio').getBoundingClientRect().top,
            document.querySelector('#calc').getBoundingClientRect().top,
            document.querySelector('#command').getBoundingClientRect().top,
            document.querySelector('#connect').getBoundingClientRect().top
        ];

        for (let i = 0; i < items.length; i++) {

            items[i].addEventListener('click', function (event) {
                event.preventDefault();

                let num = document.documentElement.scrollTop;
                let idInterval = setInterval(function () {
                    if (num < goTo[i]) {
                        num += 20;
                        document.documentElement.scrollTop = num;
                    }
                }, 2);

                setTimeout(function () {
                    clearInterval(idInterval);
                }, 2000);
            })
        };
    };
    const toServiceBlockClick = () => {
        const click = document.querySelector('main').querySelector('a');

        click.addEventListener('click', function (event) {
            event.preventDefault();

            const goTo = document.querySelector('#service-block').getBoundingClientRect().top;
            let num = document.documentElement.scrollTop;
            let idInterval = setInterval(() => {
                if (num < goTo) {
                    num += 20;
                    document.documentElement.scrollTop = num;
                }
            }, 5);

            setTimeout(function () {
                clearInterval(idInterval);
            }, 500);
        });
    };

    MenuScroll();
    toServiceBlockClick();

    body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.menu')) {
            handlerMenu();
        } else if (target === closeBtn) {
            handlerMenu();
        } else if (menu.classList.contains('active-menu') && target !== menu && !target.matches('li')) {
            handlerMenu();
        }
    });
};

export default toggleMenu;