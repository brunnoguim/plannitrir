import { createGlobalStyle } from "styled-components"
import Head from 'next/head'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: 400 16px Montserrat, sans-serif;
    scrollbar-width: auto;
    background-color: #2E3242;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    position: relative;
    }
  *::-webkit-scrollbar-track {
    background: #f8f8f8;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #6b6b76;
    border-radius: 10px;
    border: 1px solid #c9d4e2;
  }
`

const BasicLayout = ({ children }: { children: any }) => {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.png" />
      </Head>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;