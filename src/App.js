import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
