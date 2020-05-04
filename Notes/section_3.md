# Creating React Components

## Creating the Person component

A component is a function that returns some JSX

Naming Convention is Person (Directory) > Person.js > person function

```js
// Person.js
import React from 'react';

const person = () => {
    return <p>I'm a person!</p>
};

export default person;
```

And in the main app.js
```js
// App.js
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <Person/>
            </div>
        )
    }

}

export default App;
```

## Props and State

props and state are two core React concepts. Only changes in props and/or state will trigger React to update the DOM.

## Creating Dynamic Content

Put (single expression) JS content inside single curly braces {}.

```js
// Person.js
import React from 'react';

const person = () => {
    return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person;
```

## Passing Parameters to Components

We want to pass name and age parameters, and also have an optional "fill" of one of the person classes.
You can put content into your component as props or between the opening and closing tag of a component (props.children).
Props are simply an attribute to pass parameters to a component.
```js
// App.js
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <Person name="Max" age="28"/>
                <Person name="Manu" age="29">My Hobbies: Racing</Person>
                <Person name="Steph" age="26"/>
            </div>
        )
    }

}

export default App;
```

We need to add "props" to the function call (the first paranthesis). You can use a different name other than "props", 
but props is the convention.

```js
// Person.js
import React from 'react';

const person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>
};

export default person;
```

## Using the children Prop

To use output between opening and closing tabs of a component. This is called a child prop.
You can put different types of content in the props.children area.
Since only Manu has a children prop, it is the only one that displays, the others have nothing displayed.


```js
// Person.js
import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
```

## Using State

**NOTE:** Using state in too many places can make app behavior unpredictable.

State is an internal property. A class has properties.
A component (extended from component) has a special property, state. 
State is managed from **inside** a component.

State is a Javascript object. (state is a reserved word)

We use the state property to render the names and ages of the Person components displayed.

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
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
    }

}

export default App;
```

## Using a button (Events)

Using a button, we can program a function inside a component to react to the button click.

**NOTE:** As compared to HTML, onclick is onClick in React/JSX.

We create a switchNameHander function to handle a click.
Other Events you can listen to are found at: [React Supported Events](https://reactjs.org/docs/events.html#supported-events)

**NOTE:** Inside a function for a component, do not use parenthesis in the function call. Using parenthesis will disable 
the usage of "this" as a component reference.

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
        ]
    };

    switchNameHander = () => {
        console.log("Was clicked!");
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHander}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
    }

}

export default App;
```

On a click, the console will log the "Was clicked!" message.

## Changing State using a function

We should not change the state by direct reference. We use the setState() property to **merge** data from the setState to 
the current state.

```js
// App.js
// ...

    switchNameHander = () => {
        console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0] = "Maximilian";
        this.setState({
            persons:
                [
                    {"name": "Maximilian", age: 28},
                    {"name": "Manu", age: 29},
                    {"name": "Stephanie", age: 32},
                ]
        } )
    }
// ...
```

## Using useState Hook for changing state

Since React 16.8, there is a way to manipulate state using React Hooks.
You can use React Hooks to only work with functional components, but the default path (class-based components) is the 
accepted standard in most professional settings.
Hooks is a collection of functions you can use in functional components.

useState allows us to manage state in a functional component.
**NOTE:** Using setState will overwrite **NOT** merge your state.

React Hooks is about using useX functions. It means you don't need to use class-based components.

```js
// App.js
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [ personsState, setPersonsState ] = useState({
            persons: [
                {"name": "Max", age: 28},
                {"name": "Manu", age: 29},
                {"name": "Stephanie", age: 26},
            ],
            otherState: "some other value"
        });

    const switchNameHander = () => {
            console.log("Was clicked!");
            // DON'T DO THIS: this.state.persons[0] = "Maximilian";
            setPersonsState({
                persons:
                    [
                        {"name": "Maximilian", age: 28},
                        {"name": "Manu", age: 29},
                        {"name": "Stephanie", age: 32},
                    ]
            } );
        };

    const [otherState, setOtherState] = useState("some other value");

    console.log(personsState, otherState);
    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHander}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    )

};

export default App;
```

## Passing methods between Components

We want to use the switchNameHandler when you click a <p> inside a person component.

The method is sent as a prop.

```js
// App.js
//...

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

    // ...
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHander}>
                    My Hobbies: Racing
                </Person>
    // ...
```

```js
// Person.js
import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
```