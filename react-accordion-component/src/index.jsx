import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

ReactDOM.render(
  <Accordion content={
    [
      { name: "Hypertext Markup Language", description: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages." },
      { name: "Cascading Style Sheets", description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML." },
      { name: "Javascript", description: "An object-oriented computer programming language commonly used to create interactive effects within web browsers."}
    ]
  }/>,
  document.querySelector('#root')
)
