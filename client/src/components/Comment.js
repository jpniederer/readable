import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVoteComment, downVoteComment } from '../actions';
import { getDateString } from '../utils/utilities';

class Comment extends Component {
  render() {
    return (
      <div>
        <div>
          Posted by {this.props.comment.author} on {getDateString(this.props.comment.timestamp)}
        </div>
        <div>
          {this.props.comment.body}
        </div>
        <div>
          {this.props.comment.voteScore}
        </div>
        <div>
        <button className='ui button' onClick={() => this.props.upVote(this.props.comment.id)}>UpVote</button>
        <button className='ui button' onClick={() => this.props.downVote(this.props.comment.id)}>DownVote</button>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { 

  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (data) => dispatch(upVoteComment(data)),
    downVote: (data) => dispatch(downVoteComment(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);