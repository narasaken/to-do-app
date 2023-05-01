import React from 'react';
import './App.css';
import Header from "./components/Header";
import Actions from "./components/Actions";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Actions />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
