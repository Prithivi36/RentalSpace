import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL="https://back.parking.prithivi.tech"
// const BASE_URL="http://localhost:8080"

export  function saveUser(user){
    return axios.post(BASE_URL+"/auth/reg",user);
}
axios.interceptors.request.use(function(config){
    
    config.headers['Authorization']=localStorage.getItem("key")
    return config;
})
export async function getUid(datas){
    console.log(datas , "From Uid")
    await axios.post(BASE_URL+"/auth/get",(datas)).then(res=>{localStorage.setItem("key","Bearer "+res.data);console.log(res.data)})
    .catch(err=>console.log(err))
    return axios.get(BASE_URL+"/user/mail/"+datas.email);
}
export function getUser(id){
    return axios.get(BASE_URL+"/user/"+id);
}
export function getUserSpace(id){
    return axios.get(BASE_URL+"/park/my/"+id);
}
export function getUserStorage(id){
    return axios.get(BASE_URL+"/store/my/"+id);
}
export function getUserRequest(id){
    return axios.get(BASE_URL+"/book/my/"+id)
}
export function getUserRequestStorage(id){
    return axios.get(BASE_URL+"/sbook/my/"+id)
}
export function getUserRequestPending(id){
    return axios.get(BASE_URL+"/book/my/p/"+id)
}
export function getUserRequestStoragePending(id){
    return axios.get(BASE_URL+"/sbook/my/p/"+id)
}
export function acceptBooking(id){
    return axios.patch(BASE_URL+"/book/"+id)
}
export function acceptBookingStorage(id){
    return axios.patch(BASE_URL+"/sbook/"+id)
}
export function rejectBooking(id){
    return axios.patch(BASE_URL+"/book/r/"+id)
}
export function rejectBookingStorage(id){
    return axios.patch(BASE_URL+"/sbook/r/"+id)
}
export function findNearby(lt,ld,rad){
    return axios.get(BASE_URL+"/park/"+lt+"/"+ld+"/"+rad);
}
export function findNearbyStore(lt,ld,rad){
    return axios.get(BASE_URL+"/store/"+lt+"/"+ld+"/"+rad);
}
export function addSpace(data){
    return axios.post(BASE_URL+"/park/",data);
}
export function addStorage(data){
    return axios.post(BASE_URL+"/store/",data);
}
export function bookNow(data){
    return axios.post(BASE_URL+"/book",data);
}
export function bookNowStorage(data){
    return axios.post(BASE_URL+"/sbook/",data);
}
export function getMyBooks(id){
    return axios.get(BASE_URL+"/book/all/"+id);
}
export function getMyBooksStorage(id){
    return axios.get(BASE_URL+"/sbook/all/"+id);
}
export function cancelBookings(id,type){
    return axios.delete(BASE_URL+"/"+type+"/"+id)
}
export function messageViewed(id){
    return axios.patch(BASE_URL+"/user/"+id)
}
export async function toggleAvail(id,online,type){
    return axios.patch(BASE_URL+"/"+type+"/"+id+"/"+online)
}
export async function markCompleted(id,type){
    return axios.patch(BASE_URL+"/"+type+"/c/"+id)
}