// App.js

import React, {Component} from 'react';
import "./App.css"
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
    state = {
        heroes: [
            "Macaroon",
            "Sauerkraut",
            "Pasta"
        ]
    };

    renameHeroHandler = (event) => {
        this.setState({
            heroes: [
                event.target.value,
                "Sauerkraut",
                "Pasta"
            ]
        });
    };

    render() {

        return (
            <div className="App">
                <h1>The Heroes</h1>
                <UserInput
                    name={this.state.heroes[0]}
                    rename_event={this.renameHeroHandler}
                />
                <br/>
                <UserOutput name={this.state.heroes[0]}
                            skill="sweetness"/>
                <UserOutput name={this.state.heroes[1]}
                            skill="deftness"/>
                <UserOutput name={this.state.heroes[2]}
                            skill="tastiness"/>
            </div>
        )
    }
}

export default App;