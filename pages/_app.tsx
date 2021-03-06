import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CommonLayout from '../layouts/CommonLayout'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </UserProvider>
  )
}

export default MyApp
