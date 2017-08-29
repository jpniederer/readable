import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost, fetchCommentsForPost } from '../actions';
import Comment from './Comment';

class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchCommentsForPost(id);
  }

  displayComments() {
    const comments = this.props.comments;
    
    return _.map(comments, comment => {
      console.log(comment);
      return (
        <div className='item' key={comment.id}>
          <Comment comment={comment} />
        </div>
      );
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>
          <h1>Post Details</h1>
          <h2>{post.title}</h2>
          <h4>by: {post.author}</h4>
          <p>
            {post.body}
          </p>
        </div>
        <div>
          <h2>Comments</h2>
          <ul className='ui list'>
            {this.displayComments()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    post: state.posts[ownProps.match.params.id],
    comments: state.commentsForPost,
    //comments: state.postComments[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost, fetchCommentsForPost })(Post);