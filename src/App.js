import React  from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import Menu from './components/Menu';
import data from './data/recipes';
import { v4 } from 'uuid';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import SortColors from './components/SortColors';

const App = ({ store }) =>
    <div className="app">
        <SortColors store={store} />
        <AddColorForm store={store} />
        <ColorList store={store} />
    </div>
export default App