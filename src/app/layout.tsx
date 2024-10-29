// app/layout.tsx

import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Brad's Personal Site",
  description: "A display of information and past projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
