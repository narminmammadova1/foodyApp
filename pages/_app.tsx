import * as React from "react";
// import { appWithTranslation } from "next-i18next";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import { QueryClient, QueryClientProvider } from 'react-query'

import "../utils/i18n"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createRoot } from 'react-dom/client';

import {NextUIProvider} from "@nextui-org/react";
import { GlobalProvider } from "../Context/GlobalContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";

const queryClient=new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextUIProvider>
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <I18nextProvider i18n={i18n}>
  <Component {...pageProps} />
  </I18nextProvider>
  </GlobalProvider>

  <ToastContainer />
  </QueryClientProvider>
  </NextUIProvider>
  )
}

export default MyApp

// export default(MyApp)