import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React from 'react'
import Navbar from '../src/lib/components/navbar/navbar'
import Cards from '../src/lib/components/cards/cards'
import BasicTable from '../src/lib/components/dataTable/basicTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sistema de Pedidos</title>
        <meta name="description" content="sistema de pedidos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar>
        <section style={{ padding: '50px' }} >

          <Cards />

          <div style={{ paddingTop: '50px' }}>

            <h1>Últimos pedidos</h1>

            <BasicTable />

          </div>

        </section>
      </Navbar>

    </>
  )
}
