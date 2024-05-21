import axios from "axios";
const baseUrl = "http://localhost:3001/watches"; // Update the base URL to reflect watches

const getAll = () => axios.get(baseUrl);

const getById = (id) => axios.get(`${baseUrl}/${id}`);

const addNew = (watch) => axios.post(baseUrl, watch);

const editWatch = (id, watch) => axios.put(`${baseUrl}/${id}`, watch);

const deleteWatch = (id) => axios.delete(`${baseUrl}/${id}`);

export { getAll, getById, addNew, editWatch, deleteWatch };
