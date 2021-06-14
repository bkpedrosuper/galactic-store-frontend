import React from 'react'
import Head from 'next/head'
import GalacticStoreLogo from '../assets/project.png'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={GalacticStoreLogo} alt="logo" />
      <h1>Galactic Store</h1>
      <p>Um gerenciador de emissão de pedidos por Pedro Serpa.</p>

      <Link href="/products">
        <button className="button">Fazer um pedido</button>
      </Link>
    </Container>
  )
}

export default Home
