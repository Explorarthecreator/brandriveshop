export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F1F1F1] h-screen overflow-y-auto overflow-x-hidden">
      <div className="py-6 px-4 xl:px-0 max-w-[82rem] m-auto ">{children}</div>
    </main>
  );
}
