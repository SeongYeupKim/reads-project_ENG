import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "READS — Reading for Evidence And Disciplinary Science",
  description: "Science reading ITS. Build prior knowledge and disciplinary literacy through an omnibus of short stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
