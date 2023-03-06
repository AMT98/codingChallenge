import { Cars } from "./components/Cars";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { PartsCategory } from "./components/PartsCategory";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Cars />
      <PartsCategory />
      <Footer />
    </div>
  );
}

export default App;
