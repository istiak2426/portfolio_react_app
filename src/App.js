
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Menu from "./components/menu/Menu";

import Works from "./components/works/Works"
import Contacts from "./components/contacts/Contacts"

import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
     <div className="sections">
       <Intro/>
       <Portfolio />
       <Works />
       <Testimonial />
       <Contacts />

       
     </div>
    </div>
  );
}

export default App;
