import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from "src/pages/Search/"
import ProductPage from "src/pages/Product"


const Routes = () => {
    return <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route exact path="/items" component={SearchPage} />
                <Route exact path="/items/:id" component={ProductPage} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
}

export default Routes;