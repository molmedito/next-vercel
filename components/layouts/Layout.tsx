import { FC } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui/Navbar';

interface Props {
  children: JSX.Element;
  title: string;
}

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name="author" content="Marcelo Olmedo" />
        <meta name="description" content={`Información sobre el Pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>
    </>
  )
}
