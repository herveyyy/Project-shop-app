import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ClientSide.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Shop App",
  description: "My love, My Life",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <meta name="application-name" content={metadata.title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
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
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
