import * as axios from "axios";

const url="https://62cef37d486b6ce8265035e8.mockapi.io/"

export const serverAPI={
    getItems(num) {
        return axios.get(`${url}items/?page=${num}&limit=10`)
    },
    getData(endpoint) {
        return axios.get(`${url}${endpoint}`)
    },
    postData(endpoint,obj) {
        return axios.post(`${url}${endpoint}`, obj)
    },
    deleteData(endpoint,id) {
        return axios.delete(`${url}${endpoint}/${id}`) 
    }
  
}