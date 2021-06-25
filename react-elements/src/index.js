import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root')

const create = React.createElement(
  "h1",
  null,
  'Hello, React!'
);
console.log(create);

ReactDOM.render(create, root)
