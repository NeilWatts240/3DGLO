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
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn');

        popUpBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let count = 0;
                popUp.style.display = 'block';

                if (screen.availWidth > 768) {
                    popUp.style.opacity = '0';
                    let idInterval = setInterval(function () {
                        count += 0.02;
                        popUp.style.opacity = `${count}`;
                    }, 10);
                    setTimeout(function () {
                        clearInterval(idInterval);
                    }, 600);
                }
            });

            popUp.addEventListener('click', (event) => {

                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    popUp.style.display = 'none';
                } else {

                    target = target.closest('.popup-content');

                    if (!target) {
                        popUp.style.display = 'none';
                    }
                }
            });
        });
    };
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {

            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');

        let dot = [],
            currentSlide = 0,
            interval;

        for (let i = 0; i < slide.length; i++) {

            let li = document.createElement('li');
            li.classList.add('dot');

            dot[i] = li;
            dot[0].classList.add('dot-active');
            portfolioDots.append(dot[i]);

        }

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 1500) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {

                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);

    };
    const toggleCommandPics = () => {
        const command = document.querySelector('.command'),
            img = command.querySelectorAll('img');

        img.forEach((item, index) => {

            img[index].addEventListener('mouseenter', (event) => {
                const target = event.target,
                    srcPic = target.src;

                target.src = target.dataset.img;
                target.dataset.img = srcPic;
            })

            img[index].addEventListener('mouseleave', (event) => {
                const target = event.target,
                    srcPic = target.src;

                target.src = target.dataset.img;
                target.dataset.img = srcPic;
            })
        })
    };
    const calc = () => {
        const calcBlock = document.querySelector('.calc-block'),
            input = calcBlock.querySelectorAll('input');

        input.forEach((item, index) => {

            input[index].addEventListener('input', () => {
                let inputValue = input[index].value;

                inputValue.replace(/\d/, '');

            })
        })
    };

    countTimer('29 november 2022');
    toggleMenu();
    togglePopUp();
    tabs();
    slider();
    toggleCommandPics();
    calc();
});

