import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Osa = (props) => (
    <div>
        <p>{props.osa} {props.teht}</p>
    </div>
)

const Sisalto = (props) => (
    <div>
        <Osa osa={props.osat[0].nimi} teht={props.osat[0].tehtavia} />
        <Osa osa={props.osat[1].nimi} teht={props.osat[1].tehtavia}/>
        <Osa osa={props.osat[2].nimi} teht={props.osat[2].tehtavia} />
    </div>
)

const Yhteensa = (props) => (
    <div>
        <p>yhteensä {props.osat.map((p) => p.tehtavia).reduce(((a,c)=>a+c))} tehtävää</p>
    </div>
)

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
