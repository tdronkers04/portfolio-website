import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PostList from '../components/PostList';

export default function Blog({ posts }) {
  console.log('posts: ', posts);
  return (
    <div className="max-w-[800px] w-full h-full mx-auto p-2 flex flex-col items-center">
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

  const { data } = await client.query({
    query: gql`
      query getPosts {
        user(username: "tim-dronkers") {
          publication {
            posts {
              _id
              title
              dateAdded
              brief
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.user.publication.posts,
    },
  };
}
