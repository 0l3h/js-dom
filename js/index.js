'use strict';

// ******************Изменение текста кнопки****************

const buttonElement = document.querySelector('button');

let isChangedText = false;

buttonElement.addEventListener('click', e => {
    isChangedText = !isChangedText;
    if(isChangedText) {
        buttonElement.innerText = 'Changed text';
    } else {
        buttonElement.innerText = 'Initial text';
    }                                            
});

// **********Изменение картинки при наведении мыши**********

const imageElement = document.querySelector('img');

imageElement.addEventListener('mouseenter', e => {
    imageElement.setAttribute('src', 'https://cdna.artstation.com/p/assets/images/images/035/634/334/large/bogdan-mb0sco-jhc-nightwalk-closeup1.jpg?1615476078');
});

// ****************Генерация структуры HTML*****************

const rootElement = document.getElementById('root');

const h1Element = document.createElement('h1');

const h2Element = document.createElement('h2');

const imgElement = document.createElement('img');

const divElement = document.createElement('div');

const pElement = document.createElement('p');

const articleElement = document.createElement('article');

rootElement.append(h1Element, articleElement);
    h1Element.append('Header');
    articleElement.append(h2Element, divElement, pElement);
        
        h2Element.append('Header 2');
        divElement.append(imgElement);
            imgElement.setAttribute('src', '');
            imgElement.setAttribute('alt', '');
        
            pElement.append("It's a paragraph");