import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - Powering Renewables",
  description:
    "Renewably UK offers renewable energy solutions with Insurance Backed Guarantees, helping protect your installations while supporting a greener future.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='relative z-50'>
        <Navbar />
      </div>
      <main className='relative -mt-30 z-10'>{children}</main>
      <Footer />
    </>
  );
}
