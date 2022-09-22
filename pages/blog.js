/* eslint-disable no-restricted-syntax */
import React from 'react';
import PostList from '../components/PostList';
import fetchBlogPosts from '../lib/fetchAllBlogPosts';

export default function Blog({ posts }) {
  return (
    <div className="max-w-[600px] w-full h-full mx-auto p-2 flex flex-col items-center">
      <div className="mt-[4rem] md:mt-[5rem] 2xl:mt-[6rem]">
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let results = [];
  const iterator = fetchBlogPosts();

  for await (const posts of iterator) {
    results = results.concat(posts);
  }

  return {
    props: {
      posts: results,
    },
    revalidate: 10,
  };
}
