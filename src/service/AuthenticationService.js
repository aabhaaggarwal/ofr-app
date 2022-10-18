import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function forgetPassword(password){
    return axios.post(baseUrl+"/forgetpassword", password);
}

export function loginUser(login){
    return axios.post(baseUrl+"/login", login);
}