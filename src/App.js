import Navbar from './pages/home/navbar';
import Background from './pages/home/background';
import About from './pages/home/about';
import Shopping from './pages/home/shopping';
import Foods from './pages/home/foods';
import ManchesterIs from './pages/home/Manchesteris';
import Footer from './pages/home/footer';
import Shop from './pages/shopping/shop';
import FoodAndDrinks from './pages/fooddrinks/fooddrinks';
import TraffordCenter from './pages/shopping/traffordcenter';
import Arndale from './pages/shopping/arndale';
import RoyalExchange from './pages/shopping/royalexchange';
import Gaucho from './pages/fooddrinks/gaucho';
import HardRock from './pages/fooddrinks/hardrock';
import Jamboree from './pages/fooddrinks/jamboree';
import ReactDOM from "react-dom/client";
import Gallery from './pages/home/gallery';
import NotFound from './pages/home/notFound';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

    <Route path='/' element={<>
    <Navbar />
    <Background />
    <About />
    <Shopping />
    <Foods />
    <ManchesterIs />
    <Gallery />
    <Footer />
    </>}
     />
      <Route path='shopping' element={<Shop />}/>
      <Route path='shopping'>
        <Route path='trafford-center' element={<TraffordCenter />} />
        <Route path='arndale' element={<Arndale />} />
        <Route path='royal-exchange' element={<RoyalExchange />} />
      </Route>
      <Route path='foods-and-drinks' element={<FoodAndDrinks />} />
      <Route path='foods-and-drinks'>
        <Route path='gaucho' element={<Gaucho />} />
        <Route path='hard-rock-cafe' element={<HardRock />} />
        <Route path='jamboree' element={<Jamboree />} />
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>

  );
}

export default App;
