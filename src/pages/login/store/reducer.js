import { fromJS } from 'immutable'
import { LOGIN, SIGN_OUT } from './actionType'
const defaultState = fromJS({
    login: false,
    account: "",
    password: ""
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            let login = { "account": action.account, "password": action.password }
            login = JSON.stringify(login)
            localStorage.setItem("login", login)
            //  alert("login success")这里可以用element-ui
            return state.merge({
                "account": action.account,
                "password": action.password,
                "login": true
            });
        case SIGN_OUT:
            console.log("csd")
            //  localStorage.setItem("login", "")
            localStorage.removeItem("login")
            return state.merge({
                "login": false,
                "account": "",
                "password": ""
            });
        default:
            return state;
    }
}