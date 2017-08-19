import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, fetchPosts } from '../actions'
import '../App.css';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import * as api from '../utils/api';
import { getAllPosts } from '../reducers';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  displayPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className='' key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  
  render() {
    //const p =  api.fetchPosts().then((posts) => posts);
   //api.fetchPosts().then((posts) => posts.map(post => {console.log(post)}));
   //const r = api.fetchPosts().then((posts) => posts.reduce((acc, post) => acc.concat(post), []));
   //const s = api.fetchPosts().then((posts) => posts);
  //  const r = api.fetchPosts().then((posts) => posts.reduce((acc, post) => {
  //    acc.concat(post);
  //  }, []));
   //console.log(r);
   //console.log(s);
   //console.log(this.props.allPosts);
    
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
            content='A link aggregation community built using React and Redux.'
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Button primary size='huge'>
            Add a Link
                <Icon name='right arrow' />
          </Button>
        </Container>
        <Container>
          <ol>
            {this.displayPosts()}
          </ol>
        </Container>
        <p className="App-intro">
          Getting started with Readable.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () =>
      api.fetchPosts().then((posts) => {
        dispatch(getPosts(posts));
      })

  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
