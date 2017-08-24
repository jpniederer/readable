import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function PostSummary({ post }) {
  return (
    <div>
      <Link to={`/${post.category}/${post.id}`}>
        {post.title}
      </Link>
      <p>
        {post.body}
      </p>
    </div>
  )
}