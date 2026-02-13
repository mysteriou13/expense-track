'use client'  
import { ReactNode } from "react";
import { Provider } from "react-redux";
import Providers from "./providers";
import { store } from "./redux/store";
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Providers>
          {children}
          </Providers>

        </body>
      </html>
    </Provider>
  );
}
