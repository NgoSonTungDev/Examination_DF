import Providers from "@/redux_store/Provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/layout/main_layout";
import Authentication from "@/components/authentication";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Authentication />
          <MainLayout>
            <div>{children}</div>
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
