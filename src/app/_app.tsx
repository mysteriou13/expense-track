import { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"
import { store} from "@/app/redux/store";
import { Provider } from "react-redux";
import Head from 'next/head';
interface MyAppProps extends AppProps {
  pageProps: {
    session?: Session;
    [key: string]: any; 
  };
}


export default function App({Component,pageProps}:MyAppProps) {
  
  const {session, ...rest} = pageProps;

  return (
    <Provider store = {store}>
    <SessionProvider session={session}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Syncopate&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
    </Provider>

  )
}
