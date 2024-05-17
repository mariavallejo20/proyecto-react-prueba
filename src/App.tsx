import React from 'react';
import { Films } from './presentation/view/Films';
import { Characters } from './presentation/view/Characters';
import { FavoritesFilms } from './presentation/view/FavoritesFilms';
import { Planets } from './presentation/view/Planets';
import { Start } from './presentation/view/Start';
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
