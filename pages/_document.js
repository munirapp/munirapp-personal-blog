import Document, { Html, Head, Main, NextScript } from "next/document";

class DefaultDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="MunirApp Blog" />
          <meta name="keywords" content="Personal Blog" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/image/icons/icon-72x72.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/image/icons/icon-96x96.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#002ea1" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-155907014-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-155907014-1');    
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DefaultDocument;
