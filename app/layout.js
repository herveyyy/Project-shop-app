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
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
