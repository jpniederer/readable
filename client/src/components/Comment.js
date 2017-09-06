import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment, upVoteComment, downVoteComment } from '../actions';
import { getDateString } from '../utils/utilities';
import Remarkable from 'remarkable';

class Comment extends Component {
  deleteThisComment() {
    this.props.delete(this.props.comment.id);
  }

  displayMarkdown(rawMarkdown) {
    var md = new Remarkable();
    return { __html: md.render(rawMarkdown) };
  }

  render() {
    return (
      <div>
        <div>
          Posted by {this.props.comment.author} on {getDateString(this.props.comment.timestamp)}
        </div>
        <div
          dangerouslySetInnerHTML={this.displayMarkdown(this.props.comment.body)}
        >
        </div>
        <div>
          <button onClick={() => this.deleteThisComment()} className=''>Delete</button>
        </div>
        <div>
          <button className='ui button' onClick={() => this.props.upVote(this.props.comment.id)}>UpVote</button>
          {this.props.comment.voteScore}
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
    downVote: (data) => dispatch(downVoteComment(data)),
    delete: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);