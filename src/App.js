import React, { Component } from 'react';
import Collection from './components/Collection';
import Editor from './components/Editor';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    cardsList: [
      {
        id: 1,
        term: 'Group',
        definition: 'An extension of a monoid such that every element has an inverse'
      },
      {
        id: 2,
        term: 'Ring',
        definition: 'An additive group with a multiplication that follows a distributive law'
      },
      {
        id: 3,
        term: 'Field',
        definition: 'A commutative ring with every nonzero element a unit'
      }
    ],
    editingCard: {
      id: '',
      term: '',
      definition: ''
    },
    collectionMode: true,
    editMode: false,
    testMode: false,
  }
  
  CollectionStyle = () => {
    if (this.state.collectionMode) {
      return { display: 'block' }
    } else {
      return { display: 'none' }
    }
  }
  
  EditorStyle = () => {
    if (this.state.editMode) {
      return { display: 'block' }
    } else {
      return { display: 'none' }
    }
  }
  
  triggerEdit = (id) => {
    this.setState({ collectionMode: false, editMode: true, editingCard: this.state.cardsList.filter(card => card.id === id)[0] });
  }
  
  triggerNew = () => {
    this.setState({ collectionMode: false, editMode: true });
  }
  
  // Control functions when text boxes are edited
  editTermChange = (e) => {
    this.setState({ editingCard: { term: e.target.value, definition: this.state.editingCard.definition, id: this.state.editingCard.id } });
  }
  
  editDefChange = (e) => {
    this.setState({ editingCard: { definition: e.target.value, term: this.state.editingCard.term, id: this.state.editingCard.id } });
  }
  
  // Functions called when editing completes
  deleteEdit = (e) => {
    if (this.state.editingCard.id !== '') {
      this.setState({ cardsList: this.state.cardsList.filter(card => card.id !== this.state.editingCard.id) });
    }
    this.setState({ collectionMode: true, editMode: false, editingCard: { id: '', term: '', definition: ''} });
    e.preventDefault();
  }
  
  cancelEdit = (e) => {
    this.setState({ collectionMode: true, editMode: false, editingCard: { id: '', term: '', definition: ''} });  
    e.preventDefault();
  }
  
  saveEdit = (e) => {
    if (this.state.editingCard.id === '') {
      this.setState({ cardsList: [...this.state.cardsList, { id: uuid.v4(), term: this.state.editingCard.term, definition: this.state.editingCard.definition }] });
    } else {
      this.setState({ cardsList: this.state.cardsList.map((card) => {
        if (card.id === this.state.editingCard.id) {
          card.term = this.state.editingCard.term;
          card.definition = this.state.editingCard.definition;
        }
        return card;
      }) });
    }
    this.setState({ collectionMode: true, editMode: false, editingCard: { id: '', term: '', definition: ''} });
    e.preventDefault();
  }
  
  
  render() {
    return (
      <div className="App">
        <div className='Collection' style={this.CollectionStyle()}>
          <Collection cardsList={this.state.cardsList} triggerEdit={this.triggerEdit} triggerNew={this.triggerNew}/>
        </div>
        <div className="Editor" style={this.EditorStyle()}>
          <Editor editingCard={this.state.editingCard} editTermChange={this.editTermChange} editDefChange={this.editDefChange} deleteEdit={this.deleteEdit} cancelEdit={this.cancelEdit} saveEdit={this.saveEdit} />
        </div>
      </div>
    );
  }
}

export default App;