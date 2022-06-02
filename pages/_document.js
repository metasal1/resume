/* eslint-disable @next/next/no-css-tags */
import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link href="fonts/coke/font.css" rel="stylesheet" />
          <link href="fonts/pepsi/font.css" rel="stylesheet" />
          <link href="fonts/fanta/font.css" rel="stylesheet" />
          <link href="fonts/sprite/font.css" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument