// App.js

import React, {Component} from 'react';
import "./App.css"
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {


    render() {

        const style_1 = {
            backgroundColor: "eee",
        };

        const style_2 = {
            backgroundColor: "red",
        };

        const style_3 = {
            backgroundColor: "blue",
        };

        const style_4 = {
            backgroundColor: "purple",
        };

        return (
            <div className="App">
                <h1>The Heroes</h1>
                <div style={style_1}>
                    <UserInput/>
                </div>

                <br/>
                <UserOutput style={style_2}/>
                <UserOutput style={style_3}/>
                <UserOutput style={style_4}/>
            </div>
        )
    }
}

export default App;