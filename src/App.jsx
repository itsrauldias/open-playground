import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./Rotas";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;