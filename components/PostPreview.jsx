import React from 'react';
import Link from 'next/link';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

function PostPreview({ post }) {
  return (
    <div className="pt-6">
      <div className="cursor-pointer">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-black text-lg">{post.title}</h3>
        </Link>
      </div>
      <p className="py-2">{post.brief}</p>
      <div className="max-w-[200px] grid grid-rows-1 grid-flow-col gap-4">
        <p>{post.dateAdded.split('T')[0]}</p>
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
