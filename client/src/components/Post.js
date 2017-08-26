import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost, fetchCommentsForPost } from '../actions';

class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchCommentsForPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Post Details</h1>
        <h2>{post.title}</h2>
        <h4>by: {post.author}</h4>
        <p>
          {post.body}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
    commentsForPost: state.commentsForPost
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost, fetchCommentsForPost })(Post);