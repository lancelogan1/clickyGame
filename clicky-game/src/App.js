import React, { Component } from 'react';
import Layout from "./components/Layout";
import './App.css';
import "./index.css";
import pictures from "./pictures.json";

// const App = () => <Layout />;

class App extends Component {
  state = {
    pictures:pictures
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game <i className="fas fa-chess-queen"></i></h1>
          <p>&#128125; Select a picture, but dont click it twice &#9760;</p>
        </header>

        <div className= "Container">
          <Layout name = {this.state.pictures[0].name} image = {this.state.pictures[0].image} />
          {/* <Layout name = {this.state.pictures[1].name} image = {this.state.pictures[1].image} />
          <Layout name = {this.state.pictures[2].name} image = {this.state.pictures[2].image} />
          <Layout name = {this.state.pictures[3].name} image = {this.state.pictures[3].image} />
          <p className = 'clearfix'></p>
          <Layout name = {this.state.pictures[4].name} image = {this.state.pictures[4].image} />
          <Layout name = {this.state.pictures[5].name} image = {this.state.pictures[5].image} />
          <Layout name = {this.state.pictures[6].name} image = {this.state.pictures[6].image} />
          <Layout name = {this.state.pictures[7].name} image = {this.state.pictures[7].image} />
          <p className = 'clearfix'></p>
          <Layout name = {this.state.pictures[8].name} image = {this.state.pictures[8].image} />
          <Layout name = {this.state.pictures[9].name} image = {this.state.pictures[9].image} />
          <Layout name = {this.state.pictures[10].name} image = {this.state.pictures[10].image} />
          <Layout name = {this.state.pictures[11].name} image = {this.state.pictures[11].image} />
          <p className = 'clearfix'></p> */}
        </div>
        </div>
    )
  }

}

export default App;
