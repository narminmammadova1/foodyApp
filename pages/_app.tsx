import * as React from "react";
// import { appWithTranslation } from "next-i18next";


import { QueryClient, QueryClientProvider } from 'react-query'

import "./i18n"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createRoot } from 'react-dom/client';

import {NextUIProvider} from "@nextui-org/react";

const queryClient=new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextUIProvider>
  <QueryClientProvider client={queryClient}>

  <Component {...pageProps} />

  </QueryClientProvider>
  </NextUIProvider>
  )
}

// export default MyApp

export default(MyApp)