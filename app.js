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

user.setAttribute('type', 'text');
user.setAttribute('placeholder', 'username');
userPassword.setAttribute('type', 'password');
userPassword.setAttribute('placeholder', 'password')
logButton.setAttribute('type', 'submit');

document.body.append(main, footer);
main.append(h1Tag, login_box);
pFR.append(forget,register);
login_box.append(h3Tag, user, userPassword, logButton, pFR);
footer.append(pTag);

h1Tag.textContent = 'Javascript';
h3Tag.textContent = 'LOG IN';
logButton.textContent = 'Log in';
forget.textContent = 'Forget password';
register.textContent = 'Register';
pTag.textContent = '© ZB';

let arr = [];
logButton.addEventListener('click', ()=>{
    let obj = {id: Math.random(), username: user.value, password: userPassword.value}
    arr.push(obj);
    console.log(arr);
})
logButton.addEventListener('mouseover', ()=>{
    logButton.style.backgroundColor = '#707000';
})

logButton.addEventListener('mouseleave', ()=>{
    logButton.style.backgroundColor = '#808000';
})

forget.addEventListener('mouseover', ()=>{
    forget.style.textDecoration = 'underline';
})

forget.addEventListener('mouseleave', ()=>{
    forget.style.textDecoration = 'none';
})

forget.addEventListener('click', ()=>{
    alert('...soon!');
})

register.addEventListener('mouseover', ()=>{
    register.style.textDecoration = 'underline';
})

register.addEventListener('mouseleave', ()=>{
    register.style.textDecoration = 'none';
})
register.addEventListener('click', ()=>{
    login_box.style.display = 'none';
})

