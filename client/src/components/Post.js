import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost, fetchCommentsForPost, sortComments } from '../actions';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Remarkable from 'remarkable';
import sortBy from 'sort-by';

class Post extends Component {
  constructor(props) {
    super(props);

    this.sortChange = this.sortChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchCommentsForPost(id);
  }

  sortChange(event) {
    this.props.sortComments(event.target.value);
  }

  displayComments() {
    const comments = this.props.comments;
    const orderedComments = _.values(comments).sort(sortBy(this.props.commentSortOrder));

    return _.map(orderedComments, comment => {
      return (
        <div className='item' key={comment.id}>
          <Comment comment={comment} />
        </div>
      );
    });
  }

  addComment() {
    
  }

  deleteThisPost() {
    console.log(this.props);
    this.props.delete(this.props.post.id,
      () => { this.props.history.push('/') }
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
          <Link to={`/edit/post/${post.id}`} className=''>Edit Post</Link>
          <button onClick={() => this.deleteThisPost()} className=''>Delete</button>
        </div>
        <div>
          <h2>Comments</h2>
          {Object.keys(this.props.comments).length > 0 ?
          <div>
            <div>
              <select className='ui dropdown' value={this.props.commentSortOrder} onChange={this.sortChange}>
                <option value='-voteScore'>Order by Votes</option>
                <option value='voteScore'>Order by Votes Ascending</option>
                <option value='-timestamp'>Order by Date Newest</option>
                <option value='timestamp'>Order by Date Oldest</option>
              </select>
            </div>
            <ul className='ui list'>
              {this.displayComments()}
            </ul>
            </div>
           : 
            <div>
              <h3>No Comments Exist for Post</h3>
            </div>}
          <div>
            <CommentForm parentId={post.id} />
          </div>
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
    commentSortOrder: state.sorts.commentSort,
    //comments: state.postComments[ownProps.match.params.id]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (data) => dispatch(fetchPost(data)),
    delete: (id, callback) => dispatch(deletePost(id, callback)),
    fetchCommentsForPost: (data) => dispatch(fetchCommentsForPost(data)),
    sortComments: (data) => dispatch(sortComments(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);