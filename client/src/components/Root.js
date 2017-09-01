import React from 'react';
//import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Post from './Post';
import PostForm from './PostForm';
import Header from './Header';
import Footer from './Footer';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/new' component={PostForm} />
          <Route path='/edit/post/:id' component={PostForm} />
          <Route path='/:category/:id' component={Post} />
          <Route path='/posts/:id' component={Post} />
          <Route path='/:category' component={App} />
          <Route path='/' component={App} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root;