import CategoryReducer from './reducer_categories';
import CommentReducer from './reducer_comments';
import PostsReducer from './reducer_posts';
import * as api from '../utils/api';
import * as axios from '../utils/axiosApi';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostsReducer,
  commentsForPost: CommentReducer,
  form: formReducer
})

export default rootReducer;