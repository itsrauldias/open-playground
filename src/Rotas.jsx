import { Route, Routes } from "react-router";
import { Home, Menu, Utilitarios } from "./pages/Home";
import { QrCodeGenerator } from "./pages/Utilitarios/QrCodeGenerator";
import { TodoApp } from "./pages/Utilitarios/TodoApp";
import { WhatsappMessageSender } from "./pages/Utilitarios/WhatsappMessageSender";
import { SidebarMenuPage } from "./pages/Utilitarios/SidebarMenuPage";
import { PushNotifications } from "./pages/Utilitarios/PushNotifications";
import { IsStandalone } from "./pages/Utilitarios/IsStandalone";

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
            <Route path="/open-playground/utilitarios/sidebarMenu" element={<SidebarMenuPage />} />
            <Route path="/open-playground/utilitarios/pushNotifications" element={<PushNotifications />} />
            <Route path="/open-playground/utilitarios/isStandalone" element={<IsStandalone />} />
        </Routes>
    )
}
