/* eslint-disable no-restricted-syntax */
import React from 'react';
// import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';
import fetchAllBlogPosts from '../../../lib/fetchAllBlogPosts';

export default function BlogPost({ post }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={post.title} description={post.brief} />
      <div className="w-full h-screen flex items-center">
        <div className="px-3">
          <h1>{post.title}</h1>
          <p>HELLO WORLD!</p>
        </div>
      </div>

    </>
  );
}

export async function getStaticProps() {
  const post = {
    title: 'test title',
    brief: 'test brief',
  };

  return {
    props: {
      post,
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
