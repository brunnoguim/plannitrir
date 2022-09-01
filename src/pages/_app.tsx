import type { AppProps } from 'next/app'
import BasicLayout from "../layout/Basic"
import { PostitsProvider } from '../contexts/PostitsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostitsProvider>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </PostitsProvider>
  )
}

export default MyApp