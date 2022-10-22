import Model from './model/Model';
import Header from './Header';
import Footer from './Footer';
import './styles/main.css';
import { useEffect, useState } from 'react';

function App() {

  const [configActive, setConfigActive] = useState(false);
  const colors = ["Red-paint", "Blue-paint", "Green-paint", "Black-paint", "Orange-paint"]

  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(colors[index]);

  useEffect(() => {
    setColor(colors[index]);
  }, [index]);

  return (
    <div className="App">
      <Header configActive={configActive} setConfigActive={setConfigActive} />
      <div className={configActive ? "banner hidden" : "banner"}>
        <h3>Classic Ford T-5</h3>
        <h2>Mustang</h2>
      </div>
      <Model carPaint={color} />
      <Footer configActive={configActive} setConfigActive={setConfigActive} index={index} setIndex={setIndex} />
    </div>
  );
}

export default App;
