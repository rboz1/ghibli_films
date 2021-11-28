import React from 'react';
import { FilmCard } from './FilmCard.js';
import Header from './Header.js';

export class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <FilmCard />
      </div>
    );
  }
}
