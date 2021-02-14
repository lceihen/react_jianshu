import { LOGIN } from './actionType'
export const login = (account, password) => ({
    type: LOGIN,
    account: account,
    password: password
})