import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyvä: 0,
            neutraali: 0,
            huono: 0
        }
    }
    
    Button = ({name}) => {
        return (
            <button onClick={() => this.setState({[name]: this.state[name]+1})} >{name}</button>
        )
    }

    Statistics = ({name}) => {
        return (
            <span>{name} {this.state[name]}<br/></span>
        )
    }

    Statistic = (props) => {
        return (
            <span>{props.name} {props.f.toFixed(1)} {props.unit}<br/></span>
        )
    }

    render() {
        const {hyvä, neutraali, huono} = this.state
        const yht = hyvä + neutraali + huono

        const statistiikka = () => {
            if (yht === 0) {
                return (
                    <p>ei yhtään palautetta annettu</p>
                )
            }
            return (
                <p>
                    <this.Statistics name='hyvä' />
                    <this.Statistics name='neutraali' />
                    <this.Statistics name='huono' />
                    <this.Statistic name='keskiarvo' f={(hyvä-huono)/yht}/>
                    <this.Statistic name='positiivisia' f={(hyvä/yht)*100} unit='%' />
                </p>
            )
        }

        return (
            <div>
                <h1>anna palautetta</h1>
                <this.Button name='hyvä' />
                <this.Button name='neutraali' />
                <this.Button name='huono' />

                <h1>statistiikka</h1>
                {statistiikka()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
