import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./Rotas";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;