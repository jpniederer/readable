import {
GET_POSTS
} from '../actions';
import * as api from '../utils/api';

import { combineReducers } from 'redux';

const initialPostsState = api.fetchPosts().then((posts) => posts.map((post) => post));

function posts (state = initialPostsState, action) {
  return state;
}

export default combineReducers({
  posts,
});