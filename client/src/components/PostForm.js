import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, fetchCategories } from '../actions';
import uuid from 'uuid';

class PostForm extends Component {
  componentDidMount() {
    this.props.fetchCategories();
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

  renderDropdownField(field) {
    // set up the category dropdown list.
    return (
      <div>
      </div>
    )
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
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <Field
          label='Title For Post'
          name='title'
          component={this.renderTextField}
        />
        <Field
          label='Category'
          name='category'
          component={this.renderTextField}
        />
        <Field
          label='Author'
          name='author'
          component={this.renderTextField}
        />
        <Field
          label='Post'
          name='body'
          component={this.renderTextField}
        />
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

export default reduxForm({
  validate,
  form: "PostForm"
})(connect(null, { createPost, fetchCategories })(PostForm));