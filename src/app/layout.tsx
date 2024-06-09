import { Inter } from "next/font/google";
import "./ui/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>cjcocokrisp.dev</title>
        <link rel="icon" href="/images/favicon.ico" />
    </head>
        <body>
            {children}
        </body>
    </html>
  );
}