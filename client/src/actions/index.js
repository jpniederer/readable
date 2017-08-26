import * as Action from '../constants/ActionTypes';
import * as VoteOption from '../constants/VoteOptions';
import * as axios from '../utils/axiosApi';
import ax from 'axios';
export const GET_POSTS = 'GET_POSTS';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'authorized'
}

export function fetchPosts() {
  console.log(axios.fetchPosts());
  return {
    type: Action.FETCH_POSTS,
    payload: axios.fetchPosts(),
  };
}

export function fetchPost(id) {
  return {
    type: Action.FETCH_POST,
    payload: axios.fetchPost(id),
  }
}

export function createPost(post, callback) {
  return {
    type: Action.ADD_POST,
    payload: axios.addPost(post, callback),
  }
}

export function deletePost(id, callback) {
  return {
    type: Action.DELETE_POST,
    payload: axios.deletePost(id, callback),
  }
}

export function updatePost(post, callback) {
  return {
    type: Action.UPDATE_POST,
    payload: axios.updatePost(post, callback),
  }
}

export function upVotePost(id) {
  return {
    type: Action.UP_VOTE_POST,
    payload: axios.voteOnPost(id, VoteOption.UP_VOTE),
  }
}

export function downVotePost(id) {
  return {
    type: Action.DOWN_VOTE_POST,
    payload: axios.voteOnPost(id, VoteOption.DOWN_VOTE)
  }
}

export function fetchCategories() {
  return {
    type: Action.FETCH_CATEGORIES,
    payload: axios.fetchCategories(),
  };
}

export function fetchCommentsForPost(id) {
  return {
    type: Action.FETCH_COMMENTS_FOR_POST,
    payload: axios.fetchCommentsForPost(id),
  }
}

export function getPosts({ posts }) {
  return {
    type: Action.GET_POSTS,
    posts,
  }
}