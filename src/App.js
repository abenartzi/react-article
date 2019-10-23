import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Article'
import Article from "./components/Article";
import "./components/Article.css"

function App() {
    const logo = "https://hackernoon.com/hn-images/1*ub1DguhAtkCLvhUGuVGr6w.png"
    const codeText = 'React for code'
    const myContent = "Hello Guys, React or React JS is a JavaScript front-end library from Facebook which lets you create HTML based GUI. It makes the task easier by providing a component-based architecture which was only available to languages like Java and C# before."
  return (
    <div className="App">
      <header className="App-header">

        <Article title={codeText} content={myContent} imgUrl={logo} />

      </header>
    </div>
  );
}

export default App;
