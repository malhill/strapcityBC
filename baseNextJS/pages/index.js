import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';

export default function Home() {
  return (

    <div>
    <Head>
      <title>Strap City Boxing</title>
      {/* <link /> add mini club logo */}
    </Head>
      
    <Layout>
    
    <h1 >
      Home Page
      1170 × 1472
    </h1>

    <Image src='/images/club-logo.jpg' alt='Club Logo' width={600} height={755} layout='intrinsic'/>

    </Layout>

    </div>

  )
}
