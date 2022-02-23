import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Basket from "./components/ui/basket";
import NavBar from "./components/ui/navBar";
import CatalogForAdmin from "./layouts/catalogForAdmin";
import CatalogForClient from "./layouts/catalogForClient";
import Login from "./layouts/logIn";
import LogOut from "./layouts/logOut";

const App = () => {
    return (
        <div className="container">
            <NavBar />
            <Switch>
                <Route exact path="/" component={CatalogForClient} />
                <Route
                    path="/product/:productId?"
                    component={CatalogForClient}
                />
                <Route
                    path="/admin/:productId?/:edit?"
                    component={CatalogForAdmin}
                />
                <Route path="/basket" component={Basket} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={LogOut} />

                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
