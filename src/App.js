import Model from './model/Model';
import './styles/main.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Mustang configurator
      </header>
      <Model />
      <div className='menu'>

      </div>
    </div>
  );
}

export default App;
