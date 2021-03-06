import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// Font Loading snippet from:
// https://csswizardry.com/2020/05/the-fastest-google-fonts/

// UPDATE: Snipped removed due to the way that Next.js handles Google Webfonts
// https://github.com/timlrx/tailwind-nextjs-starter-blog/issues/35
// https://nextjs.org/blog/next-10-2#automatic-webfont-optimization

// With the CSSWizardry snippet the font would actually
// never load in development since onLoad="this.media='all'"
// is removed by Next.js because of SSR and
// (Document is only rendered in the server, event handlers like onClick won't work.)
// https://nextjs.org/docs/advanced-features/custom-document

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          />
          <link rel="icon" href="/favicon.ico" />
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
