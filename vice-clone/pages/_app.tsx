import '../styles/global-styles.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState } from 'react';
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {

  const [display, setDisplay] = useState<boolean>(false);


  return (
    <>
      <Layout menu={display} displayMenu={setDisplay}>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp
