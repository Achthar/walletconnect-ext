import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from "./routes/About";
import { Home } from "./routes/Home";

import './App.css';
import { Web3Provider } from './context/Web3Context';

export const App = () => {

    return (
        <Web3Provider>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Web3Provider>
    )
};
