import { useState } from 'react';
import QrCodeGenerator from './Components/QrCodeGenerator';

function App() {

  const [qrCode] = useState("https://github.com/itsrauldias")

  return (
    <div className="App">
      <h3>Open playground</h3>
      <hr />
      <div style={{ textAlign: 'center' }}>
        <p>{qrCode}</p>
        <QrCodeGenerator text={qrCode} />
      </div>
    </div>
  );
}

export default App;
