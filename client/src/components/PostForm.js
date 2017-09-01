import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, fetchCategories, fetchPost } from '../actions';
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
        console.log(cat);
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
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
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

        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderMarkdownField(field) {
    // allows markdown to be entered.
    return (
      <div>
      </div>
    )
  }

  submitForm(values) {
    // Set to be uuid.
    values.id = uuid.v4();
    values.timestamp = Date.now();
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit, post, initialValues, pristine, reset, submitting } = this.props;
    console.log(this.props.initialValues);

    return (
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <div>
          <label>Title for Post</label>
          <div>
            <Field name='title' component='input' type='text' placeholder='Title' />
          </div>
        </div>
        <div>
          <label>Category</label>
          <div>
            <Field name='category' component='select'>
              <option value=''>Select a Category</option>
              {this.categoryOptions()}
            </Field>
          </div>
        </div>
        <div>
          <label>Author</label>
          <div>
            <Field name='author' component='input' type='text' placeholder='Author' />
          </div>
        </div>
        <div>
          <label>Post</label>
          <div>
            <Field name='body' component='textarea' placeholder='Body of post. Markdown allowed.' />
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
  console.log(state.posts);
  console.log(ownProps.match.params.id);
  const match = state.posts[ownProps.match.params.id];
  console.log(match);
  return {
    post: match ? match : null,
    categories: state.categories,
    initialValues: match ? match : null
  }
}

export default reduxForm({
  validate,
  form: "PostForm"
})(connect(mapStateToProps, { createPost, fetchCategories, fetchPost })(PostForm));