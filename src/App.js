import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from "./List/ListItems.js";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!=""){
      const newItems=[...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
    console.log(this.state.items);
  }

  render() {
    return (
     <div className="App">
        <header>
        <form id="todoForm" onSubmit={this.addItem }>
          <input onChange={this.handleInput} type="text" placeholder="Enter Work" ></input>
          <button type="submit">ADD</button>
        </form>
        <ListItems items = {this.state.items}></ListItems>
      </header>
     </div>
    );
  }
}


export default App;
