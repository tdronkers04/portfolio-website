import React from 'react';

function PostPreview({ post }) {
  return (
    <div className="mt-5">
      <p className="font-bold">{post.title}</p>
      <p>{post.dateAdded}</p>
      <p>{post.brief}</p>
    </div>
  );
}

export default PostPreview;
