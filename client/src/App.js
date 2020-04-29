import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { ProductPage } from "./components/Product/ProductPage";
import { Register } from "./components/Forms/Register";
import { AccountPage } from "./components/Account/AccountPage";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Route path="/" component={Navbar} />

                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/register" component={Register} />
                        <Route path="/product/:id" component={ProductPage} />
                        <Route path="/users/:id" component={AccountPage} />
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
