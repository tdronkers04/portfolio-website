/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PostList from '../components/PostList';

export default function Blog({ posts }) {
  return (
    <div className="max-w-[600px] w-full h-full mx-auto p-2 flex flex-col items-center">
      <div className="mt-[4rem] md:mt-[5rem] 2xl:mt-[6rem]">
        <PostList posts={posts} />
      </div>
    </div>
  );
}

async function* fetchBlogPosts() {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com',
    cache: new InMemoryCache(),
  });

  let nextPageNumer = 0;

  while (true) {
    const { data } = await client.query({
      query: gql`
      query getPosts($page: Int) {
        user(username: "tim-dronkers") {
          publication {
            posts(page: $page) {
              _id
              title
              dateAdded
              brief
              totalReactions
              responseCount
            }
          }
        }
      }
      `,
      variables: { page: nextPageNumer },
    });

    if (data.user.publication.posts.length === 0) {
      break;
    }
    nextPageNumer += 1;
    yield data.user.publication.posts;
  }
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
  };
}
