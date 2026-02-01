import './globals.css';
//import Providers from './providers/Providers';


export default function LayoutRouter({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* SessionProvider est maintenant dans un Client Component */}
        <div>{children}</div>
      </body>
    </html>
  );
}
