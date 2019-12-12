import React from 'react';
import './App.css';

class App extends React.Component {

  setCurrentToDoItem = (toDoItem) => {
    this.setState({
      currentToDoItem: toDoItem
    });
  };

  strikeThrough(index) {
    const isItemSelected = this.state.selectedItems === index;
    return isItemSelected ? "strike" : "" ;
  }

  saveToDoListItem = (toDoItem) => {
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        toDoItem
      ]
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      currentToDoItem: null,
      toDoList: [],
      strikeThrough: false
    };
  }

  render() {
  return (
    <div class="container">
    <div class="input">
      <h1> To Do List </h1>
      <label>To Do Item: </label>
      <input onChange={(event) => this.setCurrentToDoItem(event.target.value)}></input>
      <button onClick={() => this.saveToDoListItem(this.state.currentToDoItem)}>
        <p>Add Item</p>
      </button>
      <p>{this.state.currentToDoItem}</p>
      </div>
      <div class="list">
        <div class="lgroup">
        <h2>To Do Items</h2>
        {
          this.state.toDoList.map((item, index) => <p className={this.strikeThrough(index)} onClick={() => this.setState({ selectedItems: index})} key={index}>{item}</p>)
        }
        </div>
      </div>
    </div>
  );
};
};
export default App;
/*
To Do List Program
Input Fields
Show The Items
*/
