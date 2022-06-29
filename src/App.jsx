import { useState } from 'react';
import QrCodeGenerator from './Components/QrCodeGenerator';
import logo from './favicon.png'

function App() {

  const [qrCode] = useState('https://github.com/itsrauldias')

  return (
    <div className="App">
      <div className="container mt-2">
        <h3><i className='fa fa-rocket' /> Open playground</h3>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3>{qrCode}</h3>
        <QrCodeGenerator
          text={qrCode}
          // width={100}
          // height={100}
          colorDark='black'
          logo={logo}
          logoBackgroundTransparent={true}
        />
      </div>
    </div>
  );
}

export default App;