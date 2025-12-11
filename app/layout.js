import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./Providers";

export const metadata = {
  title: 'KNVB Eredivisie',
  description: 'KNVB Eredivisie, Major Dutch Football League',
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
        <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
