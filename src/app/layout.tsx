import "./globals.css";

import { Syncopate } from 'next/font/google';

const syncopate = Syncopate({ subsets: ['latin'], weight: '700' });


export default function LayoutRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={syncopate.className}>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Syncopate&display=swap" rel="stylesheet" />
</head>      

        {/* SessionProvider est maintenant dans un Client Component */}
        <div>{children}</div>
      </body>
    </html>
  );
}
