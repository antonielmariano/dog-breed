import { Route, Switch } from "react-router-dom"
import Home from "../pages/home"
import Register from "../pages/register"

const Routes = () =>{

    return(
        <Switch>
            <Route exact path="/">
                <Register />
            </Route>

            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes