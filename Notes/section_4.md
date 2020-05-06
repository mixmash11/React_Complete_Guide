# Working with Lists and Conditionals

We have Javascript EVERYWHERE!

## Conditionals

We have a new state property, show_persons, which toggles the display of persons

An if example:

```js
// ternary expression
// this.state.show_persons === true
{this.state.show_persons ?
    <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHander}
            changed={this.nameChangedHandler}>
            My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div> : null
}

// better option:

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
            persons = (<div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHander}
                    changed={this.nameChangedHandler}>
                    My Hobbies: Racing
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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

```

```js
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
            persons = (<div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHander}
                    changed={this.nameChangedHandler}>
                    My Hobbies: Racing
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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
```

## Outputting Lists

Remember, everything is Javascript!

.map() maps an array into something else

```js
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
```

