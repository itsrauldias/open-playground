import { Route, Routes } from 'react-router';
import { Home, Menu, Componentes } from "./pages/Home";
import { QrCodeGenerator } from "./pages/QrCodeGenerator";

export function Rotas() {

    return (
        <Routes>
            <Route path="/open-playground" element={<Home />} />
            <Route path="/open-playground/menu" element={<Menu />} />
            <Route path="/open-playground/menu/componentes" element={<Componentes />} />
            <Route path="/open-playground/qrCodeGenerator" element={<QrCodeGenerator />} />
        </Routes>
    )
}
