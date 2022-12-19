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

export default togglePopUp;