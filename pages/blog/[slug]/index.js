/* eslint-disable no-restricted-syntax */
import React from 'react';
import Meta from '../../../components/Meta';
import fetchAllBlogPosts from '../../../lib/fetchAllBlogPosts';
import fetchBlogPost from '../../../lib/fetchBlogPost';

export default function BlogPost({ post }) {
  return (
    <>
      <Meta title={post.title} description={post.brief} />
      <div className="w-full h-screen flex items-center">
        <div className="px-3">
          <h1>{post.title}</h1>
          <p>{post.brief}</p>
        </div>
      </div>

    </>
  );
}

export async function getStaticProps(context) {
  const result = await fetchBlogPost(context.params.slug);

  return {
    props: {
      post: result.post,
    },
  };
}

export async function getStaticPaths() {
  let results = [];
  const iterator = fetchAllBlogPosts();

  for await (const posts of iterator) {
    results = results.concat(posts);
  }

  const slugs = results.map((post) => post.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
