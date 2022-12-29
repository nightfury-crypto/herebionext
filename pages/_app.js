import Head from 'next/head';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // on resize
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  return <>
    <Head>
      <title>Here Bio</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Here Bio is a web app related to biology. Helps in visualising the biology algorithm." />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://herebio.works/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Here Bio" />
      <meta property="og:description" content="Here Bio is a web app related to biology. Helps in visualising the biology algorithm." />
      <meta property="og:image" content="https://herebio.works/private/homepage.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="herebio.works" />
      <meta property="twitter:url" content="https://herebio.works/" />
      <meta name="twitter:title" content="Here Bio" />
      <meta name="twitter:description" content="Here Bio is a web app related to biology. Helps in visualising the biology algorithm." />
      <meta name="twitter:image" content="https://herebio.works/private/homepage.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />

  </>
}
