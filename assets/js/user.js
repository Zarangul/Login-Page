let user = JSON.parse(localStorage.getItem('current'));
let logout = document.getElementById('logout');

let userName = document.getElementById('name');
userName.textContent = user.name;

logout.addEventListener('click', ()=>{
    window.location.href = 'index.html';
    localStorage.removeItem('current');
})