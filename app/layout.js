import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ClientSide.jsx";
import { UserNavbar } from "@/components/UserNavbar";
const inter = Inter({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: "Project Shop App",
  description: "My love, My Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={metadata.title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <ThemeProvider>
        <body className={inter.className}>
          <header>
            <NextTopLoader
              className="fixed "
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            <div className=" fixed  w-full pt-2 md:pt-4  px-4 md:px-0 z-50">
              <UserNavbar />
            </div>
          </header>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
