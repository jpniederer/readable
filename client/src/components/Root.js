import React from 'react';
//import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Post from './Post';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/:id" component={Post} />
                <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root;