import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"
import Container from "@/components/layout/Container";

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata = {
  title: "Arjun Gujral | Product Manager",
  description: "Product Manager bridging the gap between human needs and business goals. See projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased`}
      >
        <Navbar />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
