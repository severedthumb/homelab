const h3s = document.querySelectorAll('h3');

console.log(h3s);

Array.from(h3s).forEach((h3) => {


    h3.addEventListener('click', () => {
        const caret = h3.querySelector('.caret');
        if (caret.style.transform != 'rotate(90deg)') {
            caret.style.transform = 'rotate(90deg)';
        } else {
            caret.style.transform = '';
        }

        const textArea = h3.nextElementSibling;
        if (textArea.style.display != 'block') {
            textArea.style.display = 'block';
        } else {
            textArea.style.display = 'none';
        }
    })

})