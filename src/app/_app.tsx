import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
