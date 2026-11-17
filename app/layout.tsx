import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/registry/chandratand/ui/sonner";
import { TooltipProvider } from "@/registry/chandratand/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "chandratand/ui — design system",
  description: "Tokens and components shared across chandratand projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        {/* App-level concern: chandratand/ui only reacts to the `.dark` class. */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
