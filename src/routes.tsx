import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/lading'
import OrphanegeMap from './pages/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={OrphanegeMap}/>
            <Route path="/app" component={OrphanegeMap}/>
        </BrowserRouter>
    );
}

export default Routes;