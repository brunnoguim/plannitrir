import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import Head from 'next/head'


export default function Index() {

  return (
    <div>
      <Head>
        <title>Plannit RiR</title>
      </Head>
      <Header />
      <Hero />
    </div>
  )
}