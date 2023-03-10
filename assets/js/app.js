// import {findMyAccount} from './modules/forgotPassword';

let main = document.createElement("div");
let login_box = document.createElement("div");
let footer = document.createElement("div");
let user = document.createElement('input');
let userPassword = document.createElement('input');
let logButton = document.createElement('button');
let h1Tag = document.createElement('h1');
let h3Tag = document.createElement('h3');
let pFR = document.createElement('p');
let forget = document.createElement('span');
let register = document.createElement('span');
let pTag = document.createElement('p');

let register_box = document.createElement("div");
let h3TagR = document.createElement('h3');
let name = document.createElement('input');
let userReg = document.createElement('input');
let userPasswordReg = document.createElement('input');
let signupButton = document.createElement('button');
let pbackLoginPage = document.createElement('p');
let backLogin = document.createElement('span');

main.id = 'main';
login_box.id = 'login-box';
footer.id = 'footer';
pTag.classList = 'foot-p';
user.id = 'user';
userPassword.id = 'psw'
logButton.id = 'btn';
pFR.className = 'forget-registr-box';
forget.className = 'forget';
register.className = 'registr';

name.id = 'name';
userReg.id = 'userReg';
userPasswordReg.id = 'pswReg';
signupButton.id = 'btnReg';
register_box.id = 'register-box';
pbackLoginPage.className = 'back-login-page';
backLogin.className = 'back-login'; 

user.setAttribute('type', 'text');
user.setAttribute('placeholder', 'username');
userPassword.setAttribute('type', 'password');
userPassword.setAttribute('placeholder', 'password')
logButton.setAttribute('type', 'submit');

name.setAttribute('type', 'text');
name.setAttribute('placeholder', 'name');
userReg.setAttribute('type', 'text');
userReg.setAttribute('placeholder', 'username');
userPasswordReg.setAttribute('type', 'password');
userPasswordReg.setAttribute('placeholder', 'password')
signupButton.setAttribute('type', 'submit');

document.body.append(main, footer);
main.append(h1Tag, login_box, register_box);
pFR.append(forget,register);
login_box.append(h3Tag, user, userPassword, logButton, pFR);
footer.append(pTag);

register_box.append(h3TagR, name, userReg, userPasswordReg, signupButton, pbackLoginPage);
pbackLoginPage.append(backLogin);

h1Tag.textContent = 'Javascript';
h3Tag.textContent = 'LOG IN';
logButton.textContent = 'Log in';
forget.textContent = 'Forgot Password';
register.textContent = 'Register';
pTag.textContent = '?? ZB';

h3TagR.textContent = 'Register';
signupButton.textContent = 'Sign up';
backLogin.textContent = 'Go to Login'

if(JSON.parse(localStorage.getItem('users')) === null){
    localStorage.setItem('users', JSON.stringify([]));
}

// Login part

logButton.addEventListener('click', ()=>{
    let allUsers = JSON.parse(localStorage.getItem('users'));

    let currentUser = allUsers.find(item => item.password === userPassword.value && item.username === user.value);
    localStorage.setItem('current', JSON.stringify(currentUser));

    currentUser ? window.location.href = 'user.html' : alert('It is wrong')
})
logButton.addEventListener('mouseover', ()=>{
    logButton.style.backgroundColor = '#707000';
})

logButton.addEventListener('mouseleave', ()=>{
    logButton.style.backgroundColor = '#808000';
})

// forget part

forget.addEventListener('mouseover', ()=>{
    forget.style.textDecoration = 'underline';
})

forget.addEventListener('mouseleave', ()=>{
    forget.style.textDecoration = 'none';
})

forget.addEventListener('click', ()=>{
    user.value || alert('Please enter username');
    let allUsers = JSON.parse(localStorage.getItem('users'));

    let findUser = allUsers.find(item => item.username === user.value);

    alert(findUser.password);
})  //findMyAccount(user.value)

register.addEventListener('mouseover', ()=>{
    register.style.textDecoration = 'underline';
})

register.addEventListener('mouseleave', ()=>{
    register.style.textDecoration = 'none';
})
register.addEventListener('click', ()=>{
    login_box.style.display = 'none';
    register_box.style.display = 'flex';
})


// Register part

signupButton.addEventListener('click', () =>{
    let oldUsers =  JSON.parse(localStorage.getItem('users'));
    let newPerson = {
        name: name.value,
        username: userReg.value,
        password: userPasswordReg.value
    }
    localStorage.setItem('users', JSON.stringify([...oldUsers, newPerson]));
})

signupButton.addEventListener('mouseover', ()=>{
    signupButton.style.backgroundColor = '#707000';
})

signupButton.addEventListener('mouseleave', ()=>{
    signupButton.style.backgroundColor = '#808000';
})

backLogin.addEventListener('mouseover', ()=>{
    backLogin.style.textDecoration = 'underline';
})

backLogin.addEventListener('mouseleave', ()=>{
    backLogin.style.textDecoration = 'none';
})

backLogin.addEventListener('click', ()=>{
    register_box.style.display = 'none';
    login_box.style.display = 'flex';
})
