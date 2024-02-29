const buttonNode = document.querySelector('.show-product');
const containerNode = document.querySelector('.container');
const titleNode = document.querySelector('.title');
const imageNode = document.querySelector('.image-container img');
const brandNode = document.querySelector('.brand');
const priceNode = document.querySelector('.price');
const descriptionNode = document.querySelector('.description');
const bulletsNode = document.querySelector('.product-bullets');

const jsonUrl = 'https://ychepel.github.io/fe.homeworks/lesson20/datasource/data.json';

async function fillProductData() {
    const res = await fetch(jsonUrl);
    const response = await res.json();
    const {brand, title, bullets, description, image, price} = response;
    const bulletElements = [];

    titleNode.textContent = title;
    document.title = title;
    imageNode.src = image;
    brandNode.innerHTML = brand;
    priceNode.textContent = `$${price}`;
    descriptionNode.textContent = description;

    bullets.forEach(bullet => {
        const bulletElement = document.createElement('li');
        bulletElement.innerText = bullet;
        bulletElements.push(bulletElement);
    });
    bulletsNode.textContent = '';
    bulletsNode.append(...bulletElements);
}

buttonNode.addEventListener('click', () => {
    fillProductData();
    containerNode.style.display = 'block';
});