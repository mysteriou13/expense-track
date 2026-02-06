// app/layout.tsx
'use client'  // Important ! Client Component pour utiliser Redux

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
