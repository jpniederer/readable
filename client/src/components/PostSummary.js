import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVotePost, downVotePost, fetchCommentsForPost } from '../actions';
import { getDateString } from '../utils/utilities';
import * as _ from 'lodash';

class PostSummary extends Component {
  getCommentCount() {
    const commentArray = _.values(this.props.comments);
    return commentArray.filter(comment =>
      comment.parentId === this.props.post.id).length;
  }

  componentDidMount() {
    this.props.fetchCommentsForPost(this.props.post.id);
  }

  render() {
    return (
      <div>
        <Link to={`/${this.props.post.category}/${this.props.post.id}`}>
          {this.props.post.title}
        </Link>
        - by {this.props.post.author}
        <div>
          <button className='ui button' onClick={() => this.props.upVote(this.props.post.id)}>UpVote</button>
          {this.props.post.voteScore}
          <button className='ui button' onClick={() => this.props.downVote(this.props.post.id)}>DownVote</button>
        </div>
        <div>
          posted on {getDateString(this.props.post.timestamp)}
        </div>
        {this.getCommentCount()} Comments
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.comments);
  return {
    post: state.posts[ownProps.postId],
    comments: state.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (data) => dispatch(upVotePost(data)),
    downVote: (data) => dispatch(downVotePost(data)),
    fetchCommentsForPost: (data) => dispatch(fetchCommentsForPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSummary);