import axios from 'axios';
const ROOT_URL = 'http://localhost:5001';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'authorized'
}

// Posts
export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts`, { headers })
  return request;
}

export const fetchPostsForCategory = (category) => {
  const request = axios.get(`${ROOT_URL}/${category}/posts`, { headers })
  return request;
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}`, { headers })
  return request;
}

export const addPost = (post, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts`, post, { headers })
    .then(() => callback());

  return request;
}

export const updatePost = (post, callback) => {
  const request = axios
    .put(`${ROOT_URL}/posts/${post.id}`, post, { headers })
    .then(() => callback());

  return request;
}

export const voteOnPost = (id, option, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts/${id}`, option, { headers })
    .then(() => callback());

  return request;
}

export const deletePost = (id, callback) => {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}`, { headers })
    .then(() => callback());

  return request;
}

// Categories
export const fetchCategories = () => {
  const request = axios.get(`${ROOT_URL}/categories`, { headers })
  return request;
}

// Comments
export const fetchCommentsForPost = (postId) => {
  const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
  return request;
}

export const fetchComment = (id) => {
  const request = axios.get(`${ROOT_URL}/comments/${id}`, { headers })
  return request;
}

export const postComment = (comment, callback) => {
  const request = axios.post(`${ROOT_URL}/comments`, { headers })
    .then(() => callback());

  return request;
}

export const voteOnComment = (id, option, callback) => {
  const request = axios
    .post(`${ROOT_URL}/comments/${id}`, option, { headers })
    .then(() => callback());
}

export const updateComment = (comment, callback) => {
  const request = axios
    .put(`${ROOT_URL}/comments/${comment.id}`, comment, { headers })
    .then(() => callback());

    return request;
}

export const deleteComment = (id, callback) => {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}`, { headers })
    .then(() => callback());

    return request;
}