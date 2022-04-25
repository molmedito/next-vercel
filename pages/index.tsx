import { NextPage, GetStaticProps } from 'next'
// import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts/Layout';


const HomePage: NextPage = () => {
  return (
   <Layout title="Lista de Pokémon">
    <ul>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
    </ul>
   </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      
    }
  }
}

export default HomePage
