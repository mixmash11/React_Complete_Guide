// App.js
import React, {Component} from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import './App.css';

class App extends Component {
    state = {
        input_text: "",
        text_length: 0,
    };

    changedTextHandler = (event) => {
        this.setState({
            input_text: event.target.value,
            text_length: event.target.value.length,
        });

    };

    render() {

        return (
            <div className="App">
                <h1>Name Array App</h1>
                <h2>Section 4 Assignment</h2>
                <div>
                    <label htmlFor="input_text">Text Input:</label>
                    <br/>
                    <input type="text" name="input_text" onChange={this.changedTextHandler}
                           value={this.state.input_text}/>
                </div>
                <p>The text is {this.state.text_length} characters long.</p>
                <ValidationComponent text_length={this.state.text_length}/>
            </div>
        )
    }
}

export default App;