import Model from './model/Model';
import Header from './Header';
import Footer from './Footer';
import './styles/main.css';
import { useEffect, useState } from 'react';

function App() {

  const [configActive, setConfigActive] = useState(false);

  return (
    <div className="App">
      <Header configActive={configActive} setConfigActive={setConfigActive} />
      <div className={configActive ? "banner hidden" : "banner"}>
        <h3>Classic Ford T-5</h3>
        <h2>Mustang</h2>
      </div>
      <Model />
      <Footer configActive={configActive} setConfigActive={setConfigActive} />
    </div>
  );
}

export default App;
