import './App.css';
import Header from "./Components/Header.jsx";
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import CategoryGallery from './Components/CategoryGallery';
import SearchContext from './Components/SearchContext.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (

    <div className="App">

      <div>
        <Header/>
      </div>

      <div>
        <Navbar/>
      </div>

      <div>
        <Searchbar/>
      </div>

      <div>
        <CategoryGallery/>
      </div>

      <div>
        <SearchContext/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>

  );
}

export default App;
