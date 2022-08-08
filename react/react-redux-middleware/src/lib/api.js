import axios from 'axios';

export const getPost = id =>
    axios.get(`https://jsonPlaceholder.typicode.com/posts/${id}`);

export const getUsers = id =>
    axios.get(`https://jsonPlaceholder.typicode.com/users`);