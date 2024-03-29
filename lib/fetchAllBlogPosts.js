/* eslint-disable no-await-in-loop */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

async function* fetchAllBlogPosts() {
  const defaultOptions = {
    query: {
      fetchPolicy: 'network-only',
    },
  };

  const client = new ApolloClient({
    uri: 'https://api.hashnode.com',
    cache: new InMemoryCache(),
    defaultOptions,
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
              slug
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

export default fetchAllBlogPosts;
