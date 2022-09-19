/* eslint-disable no-underscore-dangle */
import React from 'react';
import PostPreview from './PostPreview';

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => <PostPreview key={post._id} post={post} />)}
    </div>
  );
}

export default PostList;
