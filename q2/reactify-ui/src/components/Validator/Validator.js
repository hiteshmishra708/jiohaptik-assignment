export const isVaild = (type, val) => {
    let re;
    switch (type) {
        case 'email':
            re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            break;
        default:
            break;
    }
    return val && re.test(val) && val.trim();
}

export const isEmpty = (val) => {
    return val && val.trim();
}

export const getToken = () => {
    let token = localStorage.getItem("token");
    if (!token) token = sessionStorage.getItem("token");
    // console.log("token", token)
    return token
}

export const setToken = (token) => {
    removeToken();
    localStorage.setItem("token", token);
}

export const removeToken = () => {
    localStorage.removeItem("token");
}

export const MENU = [
    { url: '/home', option: 'Home' },
    { url: '/peoples', option: 'All Peoples' },
    { url: '/login', option: 'Logout' },
];