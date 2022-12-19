const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size : 2rem;';
    statusMessage.style.color = 'white';

    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        const inputs = form.querySelectorAll('input');

        form.addEventListener('submit', (event) => {

            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            const postData = (body) =>
                fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });

            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    console.log(response);
                    statusMessage.textContent = successMesage;
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                });

            inputs.forEach((input) => {
                input.value = '';
            });
        });
    });
};

export default sendForm;