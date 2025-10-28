import "../globals.css";
import Navbar from "../../components/Navbar";
import RootLayout from "../layout";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      <Navbar />
      {children}
    </RootLayout>
  );
}
