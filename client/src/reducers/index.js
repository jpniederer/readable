import {
  GET_POSTS
  } from '../actions';
  import PostsReducer from './reducer_posts';
  import * as api from '../utils/api';
  import * as axios from '../utils/axiosApi';
  
  import { combineReducers } from 'redux';
  
  let all = [];
  const setAll = (posts) => {
    console.log(posts);
    console.log(all);
    posts.map(post => all.concat(post));
  
    console.log(all);
  }
  
  const initialPostsState = axios.fetchPosts();
  
  const allPosts = (state = [1, 2, 3], action) => {
    switch (action.type) {
      case GET_POSTS:
        return action.posts.map(post => post);
      default:
        return state;
    }
  }
  
  export const getAllPosts = state =>
    state.allPosts;
  
  const rootReducer = combineReducers({
    posts: PostsReducer,
    allPosts,
  })
  
  export default rootReducer;