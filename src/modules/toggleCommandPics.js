const toggleCommandPics = () => {
    const command = document.querySelector('.command'),
        img = command.querySelectorAll('img');

    img.forEach((item, index) => {

        img[index].addEventListener('mouseenter', (event) => {
            const target = event.target,
                srcPic = target.src;

            target.src = target.dataset.img;
            target.dataset.img = srcPic;
        });

        img[index].addEventListener('mouseleave', (event) => {
            const target = event.target,
                srcPic = target.src;

            target.src = target.dataset.img;
            target.dataset.img = srcPic;
        });
    });
};

export default toggleCommandPics;