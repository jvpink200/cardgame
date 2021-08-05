import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CARDS } from './shared/cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: CARDS
    }
  }
  render () {
    return (
      <div className="App">
        <Navbar dark color="info">
        <div className="container">
            <NavbarBrand href="/">Card Game</NavbarBrand>
        </div>
        </Navbar>
        <Directory cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
