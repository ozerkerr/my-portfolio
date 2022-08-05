import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';

function App() {
  return (
    <div>
      <div className="parallax">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Header />

      <Project />
      <Footer />
    </div>
  );
}

export default App;
