import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './service/auth'

// paginas
import Login from './pages/Login'
import Home from './pages/Home'
import Product from './pages/Product'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <PrivateRoute path="/products" component={ Product } />
        </Switch>
    </BrowserRouter>
)

export default Routes
