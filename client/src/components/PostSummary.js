import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { voteOnPost } from '../actions';

class PostSummary extends Component {
  render() {
    return (
      <div>
        <Link to={`/${this.props.post.category}/${this.props.post.id}`}>
          {this.props.post.title} by {this.props.post.author}
        </Link>
        <div>
          {this.props.post.voteScore}
        </div>
        <div>
          <button className='ui button' onClick={() => voteOnPost(this.props.post.id, "upVote", null)}>UpVote</button>
          <button className='ui button' onClick={() => voteOnPost(this.props.post.id, "downVote", null)}>DownVote</button>
        </div>
        {this.props.comments ? this.props.comments.length : 0} Comments
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: state.posts[ownProps.postId],
    comments: state.postComments[ownProps.postId],
  }
}

function mapDispatchToProps (dispatch) {
  return {
    voteOnPost: (data) => dispatch(voteOnPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSummary);