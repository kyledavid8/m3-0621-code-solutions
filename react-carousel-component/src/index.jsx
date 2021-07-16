import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

ReactDOM.render(
  <Carousel poke={
    [
      { id: 0, link: "../images/pikachu.jpg" },
      { id: 1, link: "../images/charmander.png" },
      { id: 2, link: "../images/Mewtwo.png" },
      { id: 3, link: "../images/squirtle.png" },
      { id: 4, link: "../images/bulbasaur.jpg"}
    ]
  }/>,
  document.querySelector('#root')
)
