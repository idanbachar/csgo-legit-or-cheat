import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../page-routes/Home/Home";

const RouteManagement: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouteManagement;