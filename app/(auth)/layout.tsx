import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2  h-screen overflow-y-auto bg-[#F2F2F2]">
      <div
        className="h-full text-white hidden lg:flex lg:flex-col lg:justify-between bg-cover p-6"
        style={{
          backgroundImage: "url('/asset/authBackground.jpg')",
        }}
      ></div>
      <div className="bg-white h-full lg:px-10 flex items-center justify-center px-6">
        {children}
      </div>
    </main>
  );
}
