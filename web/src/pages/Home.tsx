import About from "../components/About"
import Contact from "../components/Contact"
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
    </>
  )
}
