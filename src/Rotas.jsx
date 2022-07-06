import { Route, Routes } from 'react-router';
import { Home, Menu, Componentes } from "./pages/Home";
import { QrCodeGenerator } from "./pages/QrCodeGenerator";
import { WhatsappMessageSender } from "./pages/WhatsappMessageSender";

export function Rotas() {

    return (
        <Routes>
            <Route path="/open-playground" element={<Home />} />
            <Route path="/open-playground/menu" element={<Menu />} />

            {/* Componentes */}
            <Route path="/open-playground/menu/componentes" element={<Componentes />} />
            <Route path="/open-playground/componentes/qrCodeGenerator" element={<QrCodeGenerator />} />
            <Route path="/open-playground/componentes/whatsappMessageSender" element={<WhatsappMessageSender />} />
        </Routes>
    )
}
