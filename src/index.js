import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };

    // this.onSearchField = this.onSearchField.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchField = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Monsters Rolodex</h1>
        <SearchBox place="Search monsters" handleChange={this.onSearchField} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//==============================

ReactDOM.render(<App />, document.getElementById("root"));

// import React from 'react'
// import ReactDOM from 'react-dom'
// import {images} from './assets/images'
// import {Gallery, GalleryImage} from 'react-gesture-gallery'

// const INITIAL_INDEX = 0

// function App() {
//     const [index, setIndex] = React.useState(INITIAL_INDEX)

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             if(index === images.length -1) {
//                 setIndex(INITIAL_INDEX)
//             } else {
//                 setIndex(index + 1)
//             }

//         }, 2500)
//         return () => clearInterval(interval)
//     }, [index])

//     return (
//         <Gallery
//             style={{
//                 height: '100vh',
//                 width: '100vw',
//                 background: 'black'
//             }}
//             index={index}
//             onRequestChange = {i => {
//                 setIndex(i)
//             }}
//         >
//            {images.map(image => (
//             <GalleryImage objectFit="contain" src={image} />
//            ))}
//         </Gallery>
//     )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
