const ROOT_URL = 'http://localhost:5001';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'authorized'
}

export const fetchPosts = () => 
  fetch(`${ROOT_URL}/posts`, { headers })
    .then((res) => res.json());
    //.then((posts) => posts);

export const fetchPostsForCategory = (category) =>
  fetch(`${ROOT_URL}/${category}/posts`, { headers })
    .then((res) => res.json())
    .then(data => data.posts);