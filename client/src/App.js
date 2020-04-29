import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { ProductPage } from "./components/Product/ProductPage";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/product/:id" component={ProductPage} />
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
