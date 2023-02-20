const paragraphs = document.getElementsByTagName('p');
const changeButton = document.getElementById('button');
const sizeInput = document.getElementById('size');

changeButton.addEventListener('click', () => {
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.fontWeight = 'bold';
        paragraphs[i].style.fontSize = sizeInput.value + 'px';
    }
})