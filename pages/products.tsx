import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'

function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div></div>
    </>
  )
}

export default ProductsPage

export const getServerSideProps = withPageAuthRequired()
