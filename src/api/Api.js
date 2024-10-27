import axios from "axios";

const BASE_URL="http://localhost:8080"

export  function saveUser(user){
    return axios.post(BASE_URL+"/user/",user);
}
export function getUid(email){
    return axios.get(BASE_URL+"/user/mail/"+email);
}
export function getUser(id){
    return axios.get(BASE_URL+"/user/"+id);
}
export function getUserSpace(id){
    return axios.get(BASE_URL+"/park/my/"+id);
}
export function getUserRequest(id){
    return axios.get(BASE_URL+"/book/my/"+id)
}
export function acceptBooking(id){
    return axios.patch(BASE_URL+"/book/"+id)
}
export function rejectBooking(id){
    return axios.patch(BASE_URL+"/book/r/"+id)
}
export function findNearby(lt,ld,rad){
    return axios.get(BASE_URL+"/park/"+lt+"/"+ld+"/"+rad);
}
export function addSpace(data){
    return axios.post(BASE_URL+"/park/",data);
}