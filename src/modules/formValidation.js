const formValidation = () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        const inputs = form.querySelectorAll('input');

        inputs.forEach((input) => {

            input.addEventListener('input', () => {

                if (input.classList.contains('form-phone')) {

                    input.value = input.value.replace(/[^\d+]/, '');
                }
                if (input.classList.contains('mess') ||
                    input.classList.contains('form-name') ||
                    input.id === 'form2-name') {

                    input.value = input.value.replace(/[^А-Яа-яёЁ\s]/, '');
                }
            });
        });
    });
};

export default formValidation;