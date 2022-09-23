import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

async function fetchBlogPost(slug) {
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

  const { data } = await client.query({
    query: gql`
    query getPost($hostname: String, $slug: String!) {
      post(hostname: $hostname, slug: $slug) {
        title
        dateAdded
        brief
        contentMarkdown
      }
    }
    `,
    variables: { hostname: 'tim-dronkers', slug },
  });

  if (data) {
    return data;
  }
  return `Error: blog post ${slug} not found`;
}

export default fetchBlogPost;
