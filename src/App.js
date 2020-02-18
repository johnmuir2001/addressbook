import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    current: ""
  };

  handleEnter = event => {
    console.log(event);
    if (event.key === "Enter") {
      this.submit();
    }
  };

  handleInput = e => {
    this.setState({ current: e.target.value });
  };

  submit = (e) => {
    console.log("hi");
    let storedNums = this.state.list;
    if(this.state.current === ""){
      return alert(`enter a value`)
    }
    storedNums.push(this.state.current);
    this.setState({ list: storedNums, current: "" });
  };

  remove = (index) => {
    let storedNums = this.state.list;
    storedNums.splice(index, 1)
    this.setState({list: storedNums})
  }

  render() {
    return (
      <div className="address">
        <h1>Contacts</h1>
        <div className="form">
          <input
            type="text"
            onKeyPress={this.handleEnter}
            onChange={this.handleInput}
            value={this.state.current}
            placeholder="e.g. 123-4567-8901"
          ></input>
          <button onClick={this.submit}>ADD</button>
        </div>
        <div className="contacts">
          {this.state.list.map((number, index) => {
            return <p key={index} onClick={() => this.remove(index)}>{number}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
