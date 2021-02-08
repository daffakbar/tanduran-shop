import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    
    </div>
  );
}

export default App;
