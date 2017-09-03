import * as Action from '../constants/ActionTypes';
import * as VoteOption from '../constants/VoteOptions';
import * as api from '../utils/axiosApi';

export function fetchPosts() {
  return {
    type: Action.FETCH_POSTS,
    payload: api.fetchPosts(),
  };
}

export function fetchPost(id) {
  return {
    type: Action.FETCH_POST,
    payload: api.fetchPost(id),
  }
}

export function createPost(post, callback) {
  return {
    type: Action.ADD_POST,
    payload: api.addPost(post, callback),
  }
}

export function deletePost(id, callback) {
  return {
    type: Action.DELETE_POST,
    payload: api.deletePost(id, callback),
  }
}

export function updatePost(post, callback) {
  return {
    type: Action.UPDATE_POST,
    payload: api.updatePost(post, callback),
  }
}

export function upVotePost(id) {
  return {
    type: Action.UP_VOTE_POST,
    payload: api.voteOnPost(id, VoteOption.UP_VOTE),
  }
}

export function downVotePost(id) {
  return {
    type: Action.DOWN_VOTE_POST,
    payload: api.voteOnPost(id, VoteOption.DOWN_VOTE)
  }
}

export function fetchCategories() {
  console.log(api.fetchCategories());
  return {
    type: Action.FETCH_CATEGORIES,
    payload: api.fetchCategories(),
  };
}

export function fetchCommentsForPost(id) {
  return {
    type: Action.FETCH_COMMENTS_FOR_POST,
    payload: api.fetchCommentsForPost(id),
  }
}

export function upVoteComment(id) {
  console.log(id + ' ' + Action.VOTE_ON_COMMENT);
  return {
    type: Action.VOTE_ON_COMMENT,
    payload: api.voteOnComment(id, VoteOption.UP_VOTE),
  }
}

export function downVoteComment(id) {
  console.log(id + ' ' + Action.VOTE_ON_COMMENT);
  return {
    type: Action.VOTE_ON_COMMENT,
    payload: api.voteOnComment(id, VoteOption.DOWN_VOTE),
  }
}

export function deleteComment(id, callback) {
  return {
    type: Action.DELETE_COMMENT,
    payload: api.deleteComment(id, callback),
  }
}

export function addComment(comment, callback) {
  return {
    type: Action.POST_COMMENT,
    payload: api.postComment(comment, callback),
  }
}

export function editComment(comment, callback) {
  return {
    type: Action.UPDATE_COMMENT,
    payload: api.updateComment(comment, callback),
  }
}

export function sortPosts(field) {
  return {
    type: Action.SORT_POSTS,
    payload: field
  }
}

export function reversePosts(newOrderBy) {
  return {
    type: Action.REVERSE_SORT_POSTS,
    payload: newOrderBy
  }
}

export function sortComments(field) {
  return {
    type: Action.SORT_COMMENTS,
    payload: field
  }
}

export function reverseComments(newOrderBy) {
  return {
    type: Action.REVERSE_SORT_COMMENTS,
    payload: newOrderBy
  }
}