import { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

interface MyAppProps extends AppProps {
  pageProps: {
    session?: Session;
    [key: string]: any;
  };
}

export default function App({ Component, pageProps }: MyAppProps) {
  const { session } = pageProps;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
