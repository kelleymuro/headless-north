import Head from 'next/head'
import Image from 'next/image'
import { subscribe } from 'valtio';
import CollectionList from '../components/CollectionList'
import FeaturedCollection from '../components/FeaturedCollection'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import NewCollection from '../components/NewCollection'
import Services from '../components/Services'
import ShoesCollection from '../components/Shoes'
import Solution from '../components/Solution'

export async function getStaticProps() {
  // Fetch data
  const res = await fetch(`https://store.northplugins.com/wp-json/nc-data/v1/products?expand=product-images`);
  const data = await res.json()

  // Pass data to the page via props
  return { 
      props: {
        data 
      },

      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 50000
    }

   
 

}

export default function Home({ data }) {
  return (
    <Layout>
      <Hero/>
      <CollectionList/>
      <ShoesCollection shoes={ data }/>
      <Services/>
      <FeaturedCollection/>
      <Solution/>
      <NewCollection/>
    </Layout>
  )
}
