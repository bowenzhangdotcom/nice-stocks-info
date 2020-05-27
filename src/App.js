import React from 'react'; 

import {Stocks, Change, History} from './components';

import styles from './App.module.css';

class App extends React.Component {
    render() {
        return(
            <div className ={styles.container}>
                <Stocks />
                <Change />
                <History />
            </div>
        )
    }
}

export default App;