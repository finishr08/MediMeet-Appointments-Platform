import "./globals.css";
import { Toaster } from "sonner";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediMeet - Doctors Appointment",
  description:
    "MediMeet is a user-friendly platform that simplifies doctor appointment scheduling, connecting patients with healthcare providers for fast, convenient access to medical care.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />
            <main className="min-h-screen">{children}</main>

            <Toaster richColors />

            {/* Footer  */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>
                  © {new Date().getFullYear()} MediMeet - All Rights Reserved by
                  Mustafa Ahmed
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
