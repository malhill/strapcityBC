import Head from 'next/head';
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>

    <Header />
    <Component {...pageProps} />

    </>
  )
}

export default MyApp
