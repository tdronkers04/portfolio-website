import React from 'react';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

function formatDateString(dateString) {
  return dateString.split('T')[0];
}

function PostPreview({ post }) {
  return (
    <div className="mt-6">
      <h3 className="font-bold">{post.title}</h3>
      <p className="my-1">{post.brief}</p>
      <div className="max-w-[200px] grid grid-rows-1 grid-flow-col gap-4 font-semibold">
        <p>{formatDateString(post.dateAdded)}</p>
        <div className=" max-w-[50px] grid grid-rows-1 grid-flow-col">
          <FaRegComment />
          <div>{post.responseCount}</div>
        </div>
        <div className=" max-w-[50px] grid grid-rows-1 grid-flow-col">
          <FaRegHeart />
          <div>{post.totalReactions}</div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
