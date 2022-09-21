/* eslint-disable no-underscore-dangle */
import React from 'react';
import PostPreview from './PostPreview';

function PostList({ posts }) {
  return (
    <div className="p-3">
      <h3 className="py-3 text-lg">Recent Blog Posts</h3>
      {posts.map((post) => <PostPreview key={post._id} post={post} />)}
    </div>
  );
}

export default PostList;
