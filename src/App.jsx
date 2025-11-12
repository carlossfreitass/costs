// Importa os componente do React-Router-DOM
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Importa os componentes de página
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

// Importa os componentes de layout
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    // Roteamento
    <Router>
      <Navbar />

      {/* Cria um container que aplica um layout */}
      <Container customClass="min-height">
        {/* Especifica as rotas de cada página */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App