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