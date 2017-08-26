import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, fetchPosts, fetchCommentsForPost } from '../actions';
import '../App.css';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import * as api from '../utils/api';
import { getAllPosts } from '../reducers';
import Categories from '../containers/Categories';
import PostSummaryList from './PostSummaryList';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  intializeComments() {
    _.map(this.props.posts, post => {
      this.props.fetchCommentsForPost(post.id);
    })
  }

  displayPosts() {
    const category = this.props.match.params.category;
    const matchingPosts = category ?
      _.filter(this.props.posts, post => post.category === category) :
      this.props.posts;

    return _.map(matchingPosts, post => {
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

    return (
      <div className="App">
        <div className=''>
          <Categories />
        </div>
        <div className='pusher'>
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
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    posts: state.posts,
    categories: state.categories,
    postComments: state.postComments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () =>
      api.fetchPosts().then((posts) => {
        dispatch(getPosts(posts));
      })

  }
}

export default connect(mapStateToProps, { fetchPosts, fetchCommentsForPost })(App);
