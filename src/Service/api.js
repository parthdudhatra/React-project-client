import axios from "axios";

const baseUrl = 'http://localhost:4200';

export const addUser = async (user) => {
    return await axios.post(`${baseUrl}/auth/user`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${baseUrl}/auth/user/${id}`)
}

export const getOneUser = async (id) => {
    id = id || ''
    return await axios.get(`${baseUrl}/auth/user/${id}`)
}

export const editUser = async (id, user) => {
    return await axios.put(`${baseUrl}/auth/user/${id}`, user)
}