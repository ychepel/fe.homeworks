const nameNode = document.querySelector('.name');
const avatarNode = document.querySelector('.avatar img');
const countryNode = document.querySelector('.country');
const cityNode = document.querySelector('.city');
const addressNode = document.querySelector('.address');
const emailNode = document.querySelector('.email');
const phoneNode = document.querySelector('.phone');

async function fillUserData() {
    const res = await fetch('https://randomuser.me/api/');
    const response = await res.json();
    const data = response.results[0];
    
    nameNode.innerText = data.name.first + ' ' + data.name.last;
    avatarNode.src = data.picture.large;
    countryNode.innerText = data.location.country;
    cityNode.innerText = data.location.city;
    addressNode.innerText = `${data.location.street.name}, ${data.location.street.numbere}`;
    emailNode.innerText = data.email;
    phoneNode.innerText = data.phone;
}

fillUserData();