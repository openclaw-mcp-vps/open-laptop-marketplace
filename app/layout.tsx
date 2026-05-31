import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Laptop Marketplace",
  description: "Marketplace for open-source hardware laptop designs, components, and assembly guides."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84cf0518-2786-49a1-9fb7-fbdfb9b05134"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
