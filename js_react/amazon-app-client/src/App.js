import './App.css';
// import ProductDetails from './components/ProductDetails';
// import ReviewDetails from './components/ReviewDetails'
import ProductShowPage from './components/ProductShowPage'
import ProductIndexPage from './components/ProductIndexPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar'
import ProductNewPage from './components/ProductNewPage';
import React, { Component } from 'react';
import SignInPage from './components/SignInPage'
import { Session } from './request'
import AuthRoute from './components/AuthRoute'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.getCurrent = this.getCurrent.bind(this)
  }
  componentDidMount() {
    // Session.create({ email: "admin@user.com", password: "123" }).then(data => {
    //   this.setState({
    //     user: data
    //   })
    // })
    this.getCurrent();
  }
  getCurrent() {
    Session.current().then(data => {
      this.setState({ user: data.user })
    })
  }
  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        user: null
      });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar current_user={this.state.user} onSignOut={this.signOut} />
        <Switch>
          {/* /products/12 */}
          <Route path='/' exact component={Home} />
          <AuthRoute
            isAuthenticated={this.state.user}
            path="/products/"
            exact
            component={ProductIndexPage}
          />
          <AuthRoute
            isAuthenticated={this.state.user}
            path="/products/new"
            exact
            component={ProductNewPage}
          />
          <AuthRoute
            isAuthenticated={this.state.user}
            path="/products/:id"
            exact
            component={ProductShowPage}
          />
          <Route
            path="/sign_in"
            exact
            render={routeProps => (
              <SignInPage onSignIn={this.getCurrent} {...routeProps} />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
