'use strict';

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