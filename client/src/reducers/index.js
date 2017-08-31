import CategoryReducer from './reducer_categories';
import CommentReducer from './reducer_comments';
import PostCommentReducer from './reducer_postComments';
import PostsReducer from './reducer_posts';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostsReducer,
  commentsForPost: CommentReducer,
  postComments: PostCommentReducer,
  form: formReducer
})

export default rootReducer;