import React from 'react';
import { Films } from './components/Films';
import { Characters } from './components/Characters';
import { FavoritesFilms } from './components/FavoritesFilms';
import { Planets } from './components/Planets';
import { Start } from './components/Start';
import { Routes, Route } from "react-router-dom";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:idFilm/characters" element={<Characters />} />
        <Route path="/films/:idFilm/planets" element={<Planets />} />
        <Route path="/favorites-films" element={<FavoritesFilms />} />
        
      </Routes>
    </div>
  );
}

export default App;
