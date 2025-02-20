import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/Navbar"



export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }