import Nav from './components/Nav'
import Hero from './components/Hero'
import Dor from './components/Dor'
import Virada from './components/Virada'
import BeforeAfter from './components/BeforeAfter'
import Processo from './components/Processo'
import Oferta from './components/Oferta'
import Objecoes from './components/Objecoes'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import WppFloat from './components/WppFloat'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Dor />
        <Virada />
        <BeforeAfter />
        <Processo />
        <Oferta />
        <Objecoes />
        <CtaFinal />
      </main>
      <Footer />
      <WppFloat />
    </>
  )
}
