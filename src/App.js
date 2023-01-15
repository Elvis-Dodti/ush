import './App.css';
import TopNav from './components/navbar';
import Intro from './components/intro';
import AboutUs from './components/about';
import Timeline from './components/timeline';
import Domains from './components/domain';
import Sponsors from './components/sponsors';
import FAQ from './components/FAQ'
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <TopNav />
      <Intro />
      <div className="line"></div>
      <AboutUs />
      <div className="line"></div>
      <Timeline />
      <div className="line excp"></div>
      <Domains />
      <div className="line"></div>
      <Sponsors sponsor={''}/>
      <div className="line"></div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
