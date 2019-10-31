import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }
  clearList (e) {
    console.log(`clearing list`)
    this.setState({
      toDoItemArray: [],
      newItem: ''
    })
  }
  newItemChange (e) {
    this.setState ({
      newItem: e.target.value
      })
      console.log(this.state.newItem)
  }

  addItem (e) {
    e.preventDefault()    
    console.log(`we are going to add this item`)
    let newArray = Array.from(this.state.toDoItemArray)
    newArray.push(this.state.newItem)
    console.log(newArray)
    
    this.setState({
      newItem: '',
      toDoItemArray: newArray
    })
  }
  render() {
    let toDoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItems doThis={item} key={index} />

    
    ))
    return (
      <div>
        <h1>THINGS I SHOULD SHOULD DO AFTER CLASS:</h1>
        <ul>
          {toDoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>FINISHED THE LIST!</button>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
        <button onClick={(e) => this.addItem(e)}>ADD IT!</button>
        </form>
      </div>
    )
  }
}

export default MyList;
