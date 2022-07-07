import { Route, Routes } from 'react-router';
import { Home, Menu, Utilitarios } from "./pages/Home";
import { QrCodeGenerator } from "./pages/Utilitarios/QrCodeGenerator";
import { TodoApp } from "./pages/Utilitarios/TodoApp";
import { WhatsappMessageSender } from "./pages/Utilitarios/WhatsappMessageSender";

export function Rotas() {

    return (
        <Routes>
            <Route path="/open-playground" element={<Home />} />
            <Route path="/open-playground/menu" element={<Menu />} />

            {/* Utilitários */}
            <Route path="/open-playground/menu/utilitarios" element={<Utilitarios />} />
            <Route path="/open-playground/utilitarios/qrCodeGenerator" element={<QrCodeGenerator />} />
            <Route path="/open-playground/utilitarios/toDoApp" element={<TodoApp />} />
            <Route path="/open-playground/utilitarios/whatsappMessageSender" element={<WhatsappMessageSender />} />
        </Routes>
    )
}
