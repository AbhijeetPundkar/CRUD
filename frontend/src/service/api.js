import axios from 'axios';


const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
       return await axios.post(`${URL}/add`, data);

    } catch(error) {
        console.log("Error: ",error)
    }

}

export const getUsers = async (data) => {
    try {
        return await axios.get(`${URL}/all`);
    }catch(error) {
        console.log("Error in get: ",error);
    }
    
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log("Error in get: ",error);
    }
}

export const editUser = async (user,id) => {
    try {
        return await axios.post(`${URL}/${id}`,user);
    } catch (error) {
        console.log("Error in calling edit: ",error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error in calling delete: ",error);
    }

}