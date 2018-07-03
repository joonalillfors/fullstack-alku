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
            <tr>
                <td>{name}</td>
                <td>{this.state[name]}</td>
            </tr>
        )
    }

    Statistic = (props) => {
        return (
            <tr>
                <td>{props.name}</td>
                <td>{props.f.toFixed(1)} {props.unit}</td>
            </tr>
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
                <table>
                    <tbody>
                        <this.Statistics name='hyvä' />
                        <this.Statistics name='neutraali' />
                        <this.Statistics name='huono' />
                        <this.Statistic name='keskiarvo' f={(hyvä-huono)/yht}/>
                        <this.Statistic name='positiivisia' f={(hyvä/yht)*100} unit='%' />
                    </tbody>
                </table>
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
