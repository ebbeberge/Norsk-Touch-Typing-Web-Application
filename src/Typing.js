import React, { Component } from 'react';
import {arrayOfTexts, choose, chooseNew} from './StringText';

const startText = choose(arrayOfTexts);

class Typing extends Component {
  constructor(props) {
    super(props);
    this.state = { fullText: startText, text: startText.split("")}
    this.handleKey = this.handleKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
    this.handleClickAgain = this.handleClickAgain.bind(this);
  }

  handleKey(evt) {
    if (evt.key === this.state.text[0]) {
      this.setState(prevState => {
        return {text: [...prevState.text.slice(1)]}
      })
    }
  }

  handleChange(evt) {
    evt.target.value = "";
  }

  handleClickAgain(evt) {
    this.setState({ text: this.state.fullText })
  }

  handleClickNew(evt) {
    const newText = chooseNew(arrayOfTexts, this.state.fullText)
    this.setState({ fullText: newText, text: newText.split("") })
  }

  render() {
    return (
      <div>
        {
          this.state.text.length != 0 ?
          <h3>{this.state.text.slice(0, 40)}</h3> :
          <div>
          <h2>Gratulerer!</h2>
          <h3>Trykk på knappen for å prøve igjen</h3>
          </div>
        }
        <input type="text" onKeyDown={this.handleKey} onChange={this.handleChange}/> 
        <br />
        <button onClick={this.handleClickAgain}>Prøv Igjen</button>
        <button onClick={this.handleClickNew}>Nytt Sitat</button>
      </div>
    )
  }
}

export default Typing;