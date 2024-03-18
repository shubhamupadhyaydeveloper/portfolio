import './App.css'
import HeroSection from './components/HeroSection'
import { Container } from "@chakra-ui/react";
import Navbar from './components/Navbar'
import Services from './components/Services';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Container maxW="780px" mx={"auto"} mt={"6rem"}>
        <Navbar />
        <HeroSection />
        <Services  />
        <Qualification />
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App
