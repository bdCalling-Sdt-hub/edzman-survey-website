import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";

export const metadata = {
  title: "Find your Why",
};

export default function RootLayout({ children }) {
  
  return (
        <div>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
  );
}
