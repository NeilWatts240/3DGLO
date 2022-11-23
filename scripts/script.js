window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const countTimer = (deadline) => {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        };

        if (getTimeRemaining().timeRemaining > 0) {
            setInterval(function () {
                let timer = getTimeRemaining();

                if (timer.hours < 10) {
                    timerHours.textContent = '0' + timer.hours;
                } else {
                    timerHours.textContent = timer.hours;
                }

                if (timer.minutes < 10) {
                    timerMinutes.textContent = '0' + timer.minutes;
                } else {
                    timerMinutes.textContent = timer.minutes;
                }

                if (timer.seconds < 10) {
                    timerSeconds.textContent = '0' + timer.seconds;
                } else {
                    timerSeconds.textContent = timer.seconds;
                }
            }, 1000);
        }
        else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');

            // if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            //     menu.style.transform = `translate(0)`;
            // } else {
            //     menu.style.transform = `translate(-100%)`;
            // }
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    const MenuScroll = () => {

        let items = document.querySelector('ul').querySelectorAll('li'),

            goTo = [
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
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let count = 0;
                popup.style.display = 'block';

                if (screen.availWidth > 768) {
                    popup.style.opacity = '0';
                    let idInterval = setInterval(function () {
                        count += 0.02;
                        popup.style.opacity = `${count}`;
                        console.log(count);
                    }, 10);
                    setTimeout(function () {
                        clearInterval(idInterval);
                    }, 600);
                }
                console.log(screen.availWidth);
            });
            popupClose.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        });
    };
    const toServiceBlockClick = () => {
        const click = document.querySelector('main').querySelector('a');
        click.addEventListener('click', function (event) {
            event.preventDefault();
            let num = document.documentElement.scrollTop;
            let idInterval = setInterval(() => {
                if (num < 830) {
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
    countTimer('24 november 2022');
    toggleMenu();
    togglePopUp();
});
