import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Menu from "../components/NavBar/Navbar"
import Skills from "../components/Skills"
export default function Home() {
  return (
    <>

      <Menu />
      <Head/>
      <About />
      <Skills />
      <Contact />
      <Footer/>
    </>
  )
}
