import QrCodeGenerator from './Components/QrCodeGenerator';

function App() {
  return (
    <div className="App">
      <h3>Open playground</h3>
      <hr />
      <QrCodeGenerator text='https://github.com/itsrauldias' />
    </div>
  );
}

export default App;
