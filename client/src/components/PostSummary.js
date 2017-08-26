import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVotePost, downVotePost } from '../actions';
import { getDateString } from '../utils/utilities';

class PostSummary extends Component {
  render() {
    return (
      <div>
        <Link to={`/${this.props.post.category}/${this.props.post.id}`}>
          {this.props.post.title} 
        </Link>
        - by {this.props.post.author} 
        <div>
          {this.props.post.voteScore}
        </div>
        <div>
          <button className='ui button' onClick={() => this.props.upVote(this.props.post.id)}>UpVote</button>
          <button className='ui button' onClick={() => this.props.downVote(this.props.post.id)}>DownVote</button>
        </div>
        <div>
          posted on {getDateString(this.props.post.timestamp)}
        </div>
        {this.props.comments ? this.props.comments.length : 0} Comments
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    post: state.posts[ownProps.postId],
    comments: state.postComments[ownProps.postId],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (data) => dispatch(upVotePost(data)),
    downVote: (data) => dispatch(downVotePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSummary);