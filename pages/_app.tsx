import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// import { appWithTranslation } from "next-i18next";

const queryClient=new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  )
}

export default MyApp

