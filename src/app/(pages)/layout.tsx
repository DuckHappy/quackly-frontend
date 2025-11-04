import "../globals.css";
import Navbar from "../../components/Navbar";
import RootLayout from "../layout";
import { Toaster } from "sonner";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      <Navbar />
      {children}
      <Toaster position="bottom-right" richColors />
    </RootLayout>
  );
}
