import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import data from "./components/data";
import Card from "./components/Card";
import Locations from "./components/locations";


function App() {
  const cards = data.map((places) => {
    return (
      
 <Card
    {...places}
    
  />
     
     
    );
  });
  return (
    <div>
      <Navbar />
      <Home />
      <Locations/>
      <section className="container">
      {cards}
        </section>
      
      
      
      
    </div>
  );
}

export default App;
