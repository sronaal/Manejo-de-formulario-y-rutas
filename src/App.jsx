import { NavBar } from "./components/NavBar"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { VerProductos } from "./pages/verProductos"
import { AgregarProducto } from "./pages/Productos"
import { ProductoProvider } from "./components/ContextProducto"

function App() {

  return (

    <ProductoProvider>

      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/" element={<VerProductos />} />
          <Route path="/productos" element={<VerProductos />} />

          <Route path="agregar-producto" element={<AgregarProducto />} />

        </Routes>
      </BrowserRouter>
    </ProductoProvider>
  )
}

export default App
