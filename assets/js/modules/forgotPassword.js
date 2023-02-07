export {findMyAccount};

const findMyAccount = (user)=>{
    let allUsers = JSON.parse(localStorage.getItem('users'));
    let findUser = allUsers.find(item => item.username = user);

    return findUser.password;
}