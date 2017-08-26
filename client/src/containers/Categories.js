import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { NavLink } from 'react-router-dom';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  displayCategories() {
    // Look into denoting the active link.
    // Try avoid mapping twice.
    return _.map(this.props.categories, cats => {
      return (_.map(cats, cat => {
        return (
          <div className='item' key={cat.name}>
            <NavLink to={`/${cat.name}`}>{cat.name}</NavLink>
          </div>
        );
      }));
    });
  }

  render() {
    return (
      <div className='ui left inverted vertical menu'>
        <div className='ui list'>
          <div className='item'>
            <NavLink to='/'>All</NavLink>
          </div>
          {this.displayCategories()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);