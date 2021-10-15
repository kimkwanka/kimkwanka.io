import Head from 'next/head';
import Header from '@common/Header';
import Footer from '@common/Footer';
import CaseStudy from '@containers/CaseStudy';

export default function myFlixPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka - Case Study: myFlix</title>
        <meta name="description" content="Case Study: myFlix - A movie database frontend app with a custom backend." />
        <meta name="keywords" content="Kim Kwanka, developer, React, CSS, HTML, JavaScript" />
        <meta name="author" content="Kim Kwanka" />
      </Head>
      <Header />
      <CaseStudy />
      <Footer />
    </>
  );
}
