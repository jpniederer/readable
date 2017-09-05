import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, updatePost, fetchCategories, fetchPost } from '../actions';
import uuid from 'uuid';

class PostForm extends Component {
  componentDidMount() {
    this.props.fetchCategories();

    if (this.props.match.params.id) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  categoryOptions() {
    return _.map(this.props.categories, cats => {
      return (_.map(cats, cat => {
        return (
          <option value={cat.name} key={cat.name}>{cat.name}</option>
        );
      }));
    });
  }

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" placeholder={field.placeholder} {...field.input} />
        <div className="ui red message">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderDropdown(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>

        <div className="ui red message">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderMarkdownField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control" rows='10' cols='80' placeholder={field.placeholder} {...field.input} />
        <div className="ui red message">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  submitForm(values) {
    // Set to be uuid.
    if (this.props.initialValues) {
      values.id = this.props.initialValues.id;
      this.props.updatePost(values, () => {
        this.props.history.push('/');
      });
    } else {
      values.id = uuid.v4();
      values.timestamp = Date.now();
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <div>
          <div>
            <Field name='title' placeholder='Title' component={this.renderTextField} label='Title for Post: ' />
          </div>
        </div>
        <div>
          <div>
          <label>Category: </label>
            <Field name='category' component='select'  label='Category' >
              <option value=''>Select a Category</option>
              {this.categoryOptions()}
            </Field>
          </div>
        </div>
        <div>
          <div>
            <Field name='author' component={this.renderTextField} placeholder='Author'   label='Author: ' />
          </div>
        </div>
        <div>
        <label>Post Body: </label>
          <div>
            <Field name='body' component={this.renderMarkdownField} placeholder='Body of post. Markdown allowed.' />
          </div>
        </div>
        <button type='submit' className=''>Submit</button>
        <Link to='/' className=''>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a Title';
  }

  if (!values.category) {
    errors.category = 'Select a Category'
  }

  if (!values.author) {
    errors.author = 'Enter an author';
  }

  if (!values.body) {
    errors.body = 'A Post Body is needed';
  }

  return errors;
}

function mapStateToProps(state, ownProps) {
  const match = state.posts[ownProps.match.params.id];
  console.log(ownProps);
  return {
    post: match ? match : null,
    categories: state.categories,
    initialValues: match ? match : null
  }
}

PostForm = reduxForm({
  validate,
  form: 'PostForm',
  enableReinitialize: true
})(PostForm);

PostForm = connect(mapStateToProps, { createPost, updatePost, fetchCategories, fetchPost })(PostForm);

export default PostForm;