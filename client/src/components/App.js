import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions'
import logo from '../logo.svg';
import '../App.css';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import * as api from '../utils/api';

class App extends Component {
  
  
  render() {
    const p =  api.fetchPosts().then((posts) => posts);
   api.fetchPosts().then((posts) => posts.map(post => {console.log(post)}));
    
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
        <p className="App-intro">
          Getting started with Readable.
        </p>
      </div>
    );
  }
}

function mapStateToProps({ }) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () =>
      api.fetchPosts().then((posts) => {
        dispatch(getPosts(posts));
      })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
