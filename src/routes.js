import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuemSomos from './pages/QuemSomos'
import Inicio from './pages/Inicio'
import NossosProjetos from './pages/NossosProjetos'

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio /> }></Route>
        <Route path="/quem-somos" element={ <QuemSomos /> }></Route>
        <Route path="/nossos-projetos" element={ <NossosProjetos /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;