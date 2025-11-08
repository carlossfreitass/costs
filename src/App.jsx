// Importa os componente do React-Router-DOM
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Importa os componentes de página
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

// Importa os componentes de layout
import Container from './components/layout/Container'

function App() {
  return (
    // Roteamento
    <Router>
      {/* Faz a ligação com as páginas */}
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>

      {/* Cria um container que aplica um layout */}
      <Container customClass="min-height">
        {/* Especifica as rotas de cada página */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App