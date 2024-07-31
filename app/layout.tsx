import { PageContainer } from "@/components/container";
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
      <body className="flex h-full bg-gray-50 dark:bg-gray-950">
        <Providers>
          <div className="mx-auto size-full max-w-6xl">
            <PageContainer>
              <Header />
              <main className="relative flex-auto border-gray-950/5 border-b pb-8 md:pb-16 dark:border-white/5">
                {children}
              </main>
              <Footer />
            </PageContainer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
