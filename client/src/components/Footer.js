import React from 'react';

export default function Footer() {
  return (
    <div className='ui inverted vertical footer segment'>
      <div className='ui container'>
        <div className='ui stackable inverted center aligned grid'>
          <div className='eight wide column'>
            <h4 className='ui inverted header'>created by Josh Niederer</h4>
            <div className='ui inverted link list'>
              <a className='ui button' href='http://github.com/jpniederer'>Github</a>
              <a className='ui button' href='https://dev-eryday.com'>Blog</a>
              <a className='ui button' href='https://jpniederer.com'>Personal Site</a>
            </div>
            <p>
              <i>developed as part of Udacity's React Nanodegree</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}