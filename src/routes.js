import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

// paginas
import Login from './pages/Login'
import Home from './pages/Home'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Routes
