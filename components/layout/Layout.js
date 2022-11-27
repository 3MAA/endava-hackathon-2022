import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Template - Next.js and Material-UI with Header and Footer"}
        </title>
      </Head>
      <Header />

      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
            display: block;
            margin: 1.9em 0 0 0;
          }
          body:focus {
            outline: none;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            min-height: 92vh;
            padding: 0;
            flex: 1;
            margin: 1em 10em 1em 10em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
