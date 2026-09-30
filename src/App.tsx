import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBar } from './components/MobileBar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Gastronomy } from './sections/Gastronomy';
import { Dishes } from './sections/Dishes';
import { MenuSection } from './sections/MenuSection';
import { Cellar } from './sections/Cellar';
import { Ambience } from './sections/Ambience';
import { Events } from './sections/Events';
import { Social } from './sections/Social';
import { Visit } from './sections/Visit';
import { FinalCTA } from './sections/FinalCTA';

function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Gastronomy />
        <Dishes />
        <MenuSection />
        <Cellar />
        <Ambience />
        <Events />
        <Social />
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

export default App;
