
import type { ReactElement, ReactNode } from 'react'

import 'antd/dist/antd.min.css'
import '../assets/css/global.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'



import Layout  from '../components/Layout'



export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}