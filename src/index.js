import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/Menu'
import MembersList from './components/MembersList'
import CountryList from './components/CountryList'
import TimeLine from './components/TimeLine'
import RandomMeUsers from './components/PeopleList'
import data from './data/recipes'
import './App.css';
import Countdown from './components/Countdown';
import CountdownDispatcher from './dispatchers/CountdownDispatcher';
import CountdownActions from './actions/CountdownAction';
import CountdownStore from './store/CountdownStore';
import {color, sort} from './redusers/ColorReducers';
/*import {store} from './store/ColorsStore';*/
import { v4 } from 'uuid';
import { addColor } from './creators';
import { compose } from 'redux'
import storeFactory from "./store/StoreFactory"
import App from "./App"
import {sortColors} from "./creators"



/*const historicDatesForSkiing = [
    {
        year: 1879,
        event: "Ski Manufacturing Begins"
    },
    {
        year: 1882,
        event: "US Ski Club Founded"
    },
    {
        year: 1924,
        event: "First Winter Olympics Held"
    },
    {
        year: 1926,
        event: "First US Ski Shop Opens"
    },
    {
        year: 1932,
        event: "North America's First Rope Tow Spins"
    },
    {
        year: 1936,
        event: "First Chairlift Spins"
    },
    {
        year: 1949,
        event: "Squaw Valley, Mad River Glen Open"
    },
    {
        year: 1958,
        event: "First Gondola Spins"
    },
    {
        year: 1964,
        event: "Plastic Buckle Boots Available"
    }
]*/
/*
 ReactDOM.render(
 //<Menu recipes={data} title="Delicious Recipes" />,
 //<MembersList count="10" />,
 //<CountryList count="10" />,
 //<TimeLine name="History of Skiing" data={historicDatesForSkiing}/>,
 //<PeopleList/>,
 <RandomMeUsers count={40} />,
 document.getElementById("react-root")
 );*/

/*
 const appDispatcher = new CountdownDispatcher();
 const actions = CountdownActions(appDispatcher);
 const store = new CountdownStore(0, 20, appDispatcher);
 const render = (count,max) => ReactDOM.render(
 <Countdown count={count} max={max} {...actions} />,
 document.getElementById('react-root')
 )

 store.on("TICK", () => render(store.count));
 store.on("TICK_UP", () => render(store.count, store.max));
 store.on("RESET", () => render(store.count));
 render(store.count,store.max);
 */
/*const store = storeFactory(true);
store.dispatch( addColor("#FFFFFF","Bright White") );
store.dispatch( addColor("#00FF00","Lawn") );
store.dispatch( addColor("#0000FF","Big Blue") );*/
/*
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
});

store.dispatch(addColor("Party Pink", "#F142FF" ));

const print = compose(
    list => console.log(list),
    titles => titles.join(", "),
    map => map(c=>c.title),
    colors => colors.map.bind(colors),
    state => state.colors
)
print(store.getState());
*/

const store = storeFactory();
const render = () =>
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('react-root')
    )
store.subscribe(render)
render();


