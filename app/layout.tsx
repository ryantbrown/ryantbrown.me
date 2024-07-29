import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import "@/styles/tailwind.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Ryan T. Brown",
    default:
      "Ryan T. Brown - Technical founder, software engineer and product builder.",
  },
  description:
    "I’m Ryan, a life-long software engineer and entrepreneur from California. I’m currently building ProductStack, which turns motivated developers into superhuman product builders.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-gray-50 dark:bg-gray-900">
        <Providers>
          <div className="fixed inset-0 flex justify-center px-2 md:px-6 lg:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-300/20" />
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <Header />
            <main className="flex-auto">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
