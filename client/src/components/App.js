import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, fetchPosts, fetchCommentsForPost, reversePosts } from '../actions';
import '../App.css';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import * as api from '../utils/api';
import { getAllPosts } from '../reducers';
import Categories from '../containers/Categories';
import PostSummaryList from './PostSummaryList';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  intializeComments() {
    _.map(this.props.posts, post => {
      this.props.fetchCommentsForPost(post.id);
    })
  }

  reverseSort() {
    const newOrderBy = this.props.postSortOrder[0] === '-' ? this.props.postSortOrder.substring(1) : '-' + this.props.postSortOrder;
    console.log(newOrderBy);
    this.props.reversePosts(newOrderBy);
  }

  displayPosts() {
    const category = this.props.match.params.category;
    const matchingPosts = category ?
      _.filter(this.props.posts, post => post.category === category) :
      this.props.posts;

    const orderedMatchingPosts = _.values(matchingPosts).sort(sortBy(this.props.postSortOrder));
    console.log(orderedMatchingPosts);

    return _.map(orderedMatchingPosts, post => {
      return (
        <div className='item' key={post.id}>
          <PostSummary postId={post.id} />
        </div>
      );
    });
  }

  render() {
    const keys = _.keys(this.props.posts);
    if (_.isEmpty(this.props.postComments)) {
      this.intializeComments();
    }
    const categoryPath = this.props.match.url;

    return (
      <div className="ui two column divided grid">
        <div className='right floated four wide column' style={{ maxWidth: 250 }}>
          <Categories categoryPath={categoryPath} />
        </div>
        <div className='ui ten wide column'>
          <h2>Posts</h2>
          <Container>
            <ul className='ui list'>
              {this.displayPosts()}
            </ul>
            {this.props.posts && <PostSummaryList posts={this.props.posts} />}
            <div>
              <ul className='ui list'> {
                keys.map(key => {
                  <div className='ui list'>
                    <Link to={`/posts/${key}`}>
                      {this.props.posts[key].title}
                    </Link>
                  </div>
                })
              }
              </ul>
            </div>
          </Container>
          <div>
            <Container text>
              <Link to='/new'>
                <Button primary size='huge'>
                  Add a Post
                <Icon name='right arrow' />
                </Button>
              </Link>
            </Container>
          </div>
        </div>
        <div>
          <button className='ui button'onClick={() => this.reverseSort()}>Reverse Posts</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    posts: state.posts,
    categories: state.categories,
    postComments: state.postComments,
    postSortOrder: state.sorts.postSort
  }
}

function mapDispatchToProps(dispatch) {
  return {  }
}

export default connect(mapStateToProps, { fetchPosts, fetchCommentsForPost, reversePosts })(App);
