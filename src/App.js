import React, { Component } from 'react';
import List from './components/list/List';
import Note from './components/note/Note';
import Organiser from './components/organiser/Organiser';
import Footer from './components/footer/Footer';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App container'>
        <List id="list" />
        <Note id="note" />
        <Organiser id="organiser" />
        <Footer />
      </div>
    )
  }
}
