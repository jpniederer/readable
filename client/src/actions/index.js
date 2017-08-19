import * as Action from '../constants/ActionTypes';
import * as axios from '../utils/axiosApi';
import ax from 'axios';
export const GET_POSTS = 'GET_POSTS';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'authorized'
}

export function fetchPosts() {
  return {
    type: Action.FETCH_POSTS,
    payload: axios.fetchPosts(),
  };
}

export function getPosts({ posts }) {
  return {
    type: Action.GET_POSTS,
    posts,
  }
}