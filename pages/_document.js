import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {'<!-- Cloudflare Web Analytics -->'}
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "ba8e0c2c08a9462c80676509e0d83d6f"}' />
          {'<!-- End Cloudflare Web Analytics -->'}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
