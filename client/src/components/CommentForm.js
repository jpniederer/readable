import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addComment, editComment, toggleCommentEdit } from '../actions';
import uuid from 'uuid';

class CommentForm extends Component {
  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" placeholder={field.placeholder} {...field.input} />
        <div className="">
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
        <div className="">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  submitForm(values) {
    if (this.props.initialValues) {
      values.id = this.props.initialValues.id;
      this.props.editComment(values);
    } else {
      values.id = uuid.v4();
      values.parentId = this.props.parentId;
      values.timestamp = Date.now();
      this.props.addComment(values);
      this.props.reset();
    }

    this.props.toggleCommentEdit('');
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, heading } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <div>
          <h3>{heading}</h3>
          <div>
            <Field name='author' placeholder='Author' component={this.renderTextField} label='Author: ' />
          </div>
          <div>
            <Field name='body' placeholder='Comment text, Markdown accepted...' component={this.renderMarkdownField} label='Comment: ' />
          </div>
          <button type='submit' className=''>Submit</button>
          <button type='button' disabled={submitting} onClick={() => this.props.toggleCommentEdit('')}>Cancel</button>
        </div>
      </form>
    )
  }
}

function validate(values) {

}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: ownProps.comment
  }
}

CommentForm = reduxForm({
  validate,
  form: 'CommentForm',
  enableReinitialize: true
})(CommentForm);

CommentForm = connect(mapStateToProps, { addComment, editComment, toggleCommentEdit })(CommentForm);

export default CommentForm;