import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost, fetchCommentsForPost } from '../actions';
import Comment from './Comment';
import Remarkable from 'remarkable';

class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchCommentsForPost(id);
  }

  displayComments() {
    const comments = this.props.comments;
    
    return _.map(comments, comment => {
      return (
        <div className='item' key={comment.id}>
          <Comment comment={comment} />
        </div>
      );
    });
  }

  deleteThisPost() {
    console.log(this.props);
    this.props.delete(this.props.post.id, 
      () => { this.props.history.push('/')}
    );
  }

  displayMarkdown(rawMarkdown) {
    var md = new Remarkable();
    return { __html: md.render(rawMarkdown) };
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
          <div
            className='content'
            dangerouslySetInnerHTML={this.displayMarkdown(post.body)}
          >
          </div>
        </div>
        <div>
          <button onClick={() => alert('Edit')} className=''>Edit</button>
          <Link to={`/edit/post/${post.id}`} className=''>Edit</Link>
          <button onClick={() => this.deleteThisPost()} className=''>Delete</button>
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

function mapDispatchToProps (dispatch) {
  return {
    fetchPost: (data) => dispatch(fetchPost(data)),
    delete: (id, callback) => dispatch(deletePost(id, callback)),
    fetchCommentsForPost: (data) => dispatch(fetchCommentsForPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);