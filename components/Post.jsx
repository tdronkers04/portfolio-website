import React from 'react';
import ReactMarkdown from 'react-markdown';

function Post({ post }) {
  return (
    <div className="w-full h-screen pt-[100px]">
      <div className="max-w-[800px] w-full h-full mx-auto p-2 flex flex-col">
        <h1 className="text-black text-lg">{post.title}</h1>
        <p>{post.dateAdded.split('T')[0]}</p>
        <ReactMarkdown
          allowDangerousHtml
          className="markdown"
        >
          {post.contentMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Post;
