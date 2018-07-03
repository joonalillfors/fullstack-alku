import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        pisteet: [0, 0, 0, 0, 0, 0]
      }
    }
  
    rand = () => {
        return (
            <button onClick={() => this.setState({selected: (Math.random() * (this.props.anecdotes.length-1)).toFixed(0)})}>next anecdote</button>
        )
    }

    kopio = () => {
        const kopio = this.state.pisteet
        kopio[this.state.selected] += 1
        return kopio
    }

    vote = () => {
        return (
            <button onClick={() => this.setState({pisteet: this.kopio()})}>vote</button>
        )
    }
    render() {
        const max = Math.max(...this.state.pisteet)
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <br/>
                has {this.state.pisteet[this.state.selected]} votes
                <div>
                    <this.vote />
                    <this.rand />
                </div>
                <div>
                    <h3>anecdote with most votes:</h3>
                    {this.props.anecdotes[this.state.pisteet.indexOf(max)]}
                    <br/>
                    has {max} votes
                </div>
            </div>
        )
    }
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
