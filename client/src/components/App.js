import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, fetchPosts, fetchCategories } from '../actions'
import '../App.css';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import * as api from '../utils/api';
import { getAllPosts } from '../reducers';
import PostSummaryList from './PostSummaryList';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  displayPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div className='item' key={post.id}>
          <PostSummary post={post} />
        </div>
      );
    });
  }
  
  render() {
   const keys = _.keys(this.props.posts);
    
    return (
      <div className="App">
        <Container text>
          <Header
            as='h1'
            content='readable'
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
          />
          <Header
            as='h2'
            content='A posting community built using React and Redux.'
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Button primary size='huge'>
            Add a Link
                <Icon name='right arrow' />
          </Button>
        </Container>
        <Container>
          <ul className='ui list'>
            {this.displayPosts()}
          </ul>
          {this.props.posts && <PostSummaryList posts={this.props.posts} /> }
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
        <p className="App-intro">
          Getting started with Readable.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  categories: state.categories
})

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () =>
      api.fetchPosts().then((posts) => {
        dispatch(getPosts(posts));
      })

  }
}

export default connect(mapStateToProps, {fetchPosts, fetchCategories})(App);
