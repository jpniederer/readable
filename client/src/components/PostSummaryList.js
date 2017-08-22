import React, { Component } from 'react';
import PostSummary from './PostSummary';
import _ from 'lodash';

export default function PostSummaryList({ posts }) {
  const keys = _.keys(posts);

  return (
    <div>
      <ul className='ui list'> {
        keys.map(key => {
          <li className='item'>
            <PostSummary post={posts[key]} />
          </li>
        })}
      </ul>
    </div>
  )
}