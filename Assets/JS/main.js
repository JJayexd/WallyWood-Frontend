import { latest } from "./Modules/fetch.js";

const ROOT = document.getElementById('root');

const ul = document.createElement('ul');
const navItems = ['WALLYWOOD', 'FORSIDE', 'PLAKATER', 'OM OS', 'KONTAKT', 'LOGIN', 'BASKET']

navItems.forEach((item, index) => {
    const li = document.createElement('li');

    li.textContent = item;
    li.href = `${item}`;

    if (index > 5 ) {
        li.innerHTML = '<i class="fa-solid fa-basket-shopping" id="basket"></i>';
    }

    if (index === 0 ) {
        li.classList.add('bold');
    }

    ul.appendChild(li);
    ROOT.appendChild(ul);
})

const img = document.createElement('img');
img.src = 'Assets/image.png';
img.width = 1300;

ROOT.appendChild(img);

latest();