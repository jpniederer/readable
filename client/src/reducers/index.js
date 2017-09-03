import CategoryReducer from './reducer_categories';
import CommentReducer from './reducer_comments';
import PostCommentReducer from './reducer_postComments';
import PostsReducer from './reducer_posts';
import SortReducer from './reducer_sorts';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostsReducer,
  commentsForPost: CommentReducer,
  postComments: PostCommentReducer,
  sorts: SortReducer,
  form: formReducer
})

export default rootReducer;