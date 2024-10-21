import axios from "axios";

const BASE_URL="http://localhost:8080"

export  function saveUser(user){
    return axios.post(BASE_URL+"/user/",user);
}
export function getUid(email){
    return axios.get(BASE_URL+"/user/mail/"+email);
}