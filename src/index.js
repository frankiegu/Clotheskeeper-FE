import React from 'react'
import ReactDOM from 'react-dom'
import Chiruno from './chiruno.png'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reset: 'yes'
        };
    }
    onClick = ()=> {
        console.log("onclick!!!");
        this.setState({
            reset: this.state.reset === 'yes' ? 'no' : 'yes'
        });
    }
    render() {
        return (
            <div>
                <img src={Chiruno} className={this.state.reset === 'yes' ? '' : 'timg'} onClick={this.onClick} alt="BAKA!s" />
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));


