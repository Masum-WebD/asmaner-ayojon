
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Contact from './component/Contact';
import BookCalligraphy from './component/BookCalligraphy';
import IslamicCalliGraphry from './component/IslamicCalliGraphry';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <IslamicCalliGraphry/>
      <BookCalligraphy/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
