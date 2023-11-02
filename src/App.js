import logo from './logo.svg';
import './App.css';
import Personagem from './components/Personagem';
import AudioPlayer from './components/Som';

function App() {
  return (
    <div className="App">
      <AudioPlayer />
      <Personagem />
    </div>
  );
}

export default App;
