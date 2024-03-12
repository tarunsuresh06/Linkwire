import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#00C4CC] to-[#0A1A44] text-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
