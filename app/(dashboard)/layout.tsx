import Navbar from "@/components/navigation/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F6F9FF] dark:bg-black h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div className="py-6 px-4 xl:px-0 max-w-[82rem] m-auto  ">{children}</div>
    </main>
  );
}
