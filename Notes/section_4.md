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
// App.js
//...

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

## Lists and State

We want to manipulate the array. We are adding a deletePersonHandler to each person, which deletes the person on clicking.

We want to run the handler but must also pass it a parameter. We run the handler as a full function with the arrow function.
We also need to pass the array index, which is a native part of the map return in format :(object, index).
```js
// App.js
//...

persons = (
    <div>
        {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
            />
        })}
    </div>)
```

Now we need to manipulate the array. We first create a copy of the array. 
We "splice" the array by noting a starting index and then a length of how many objects to splice.
```js
// App.js
//...

deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); <- alternative approach (pre-es6)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
};
```

## Lists and Keys

Key property: Default property expected for an object to help quickly identify which objects need to be re-rendered.
We add a key to the person object and the map function
```js
// App.js
//...

state = {
        persons: [
            { id: '0', name: "Max", age: 28},
            { id: '1', name: "Manu", age: 29},
            { id: '2', name: "Stephanie", age: 26},
        ],
        show_persons: false,
};

//...

persons = (
    <div>
        {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
            />
        })}
    </div>)
```

## Flexible Lists

We want to update the name change input to work for each component individually.

```js
// App.js
//...

// Changing a single object in an arraynameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]); <- Alt copy

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
        persons:persons
    })
};

//...

persons = (
    <div>
        {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) =>this.nameChangedHandler(event, person.id)}
            />
        })}
    </div>)
```

