// App.js
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {"name": "Max", age: 28},
            {"name": "Manu", age: 29},
            {"name": "Stephanie", age: 26},
        ],
        show_persons: false,
    };

    switchNameHander = () => {
        // console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0] = "Maximilian";
        this.setState({
            persons:
                [
                    {"name": "Maximilian", age: 28},
                    {"name": "Manu", age: 29},
                    {"name": "Stephanie", age: 32},
                ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons:
                [
                    {"name": "Maximilian", age: 28},
                    {"name": event.target.value, age: 29},
                    {"name": "Stephanie", age: 26},
                ]
        })
    };

    togglePersonsHandler = () => {
        console.log("click!");
        const doesShow = this.state.show_persons;
        this.setState({show_persons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
        };

        let persons = null;
        if (this.state.show_persons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age}
                        />
                    })}
                </div>)
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        )
    }

}

export default App;
