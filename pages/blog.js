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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com',
    cache: new InMemoryCache(),
  });
  let results = [];

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
    variables: { page: 0 },
  });

  results = [...data.user.publication.posts];

  const result2 = await client.query({
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
    variables: { page: 1 },
  });

  results = results.concat([...result2.data.user.publication.posts]);

  return {
    props: {
      posts: results,
    },
  };
}
