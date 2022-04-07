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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} }
  }
  componentDidMount() {
    // Session.create({ email: "admin@user.com", password: "123" }).then(data => {
    //   this.setState({
    //     user: data
    //   })
    // })
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* /products/12 */}
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={ProductIndexPage} />
          <Route path='/products/new' component={ProductNewPage} />
          <Route path='/products/:id' component={ProductShowPage} />
          <Route path="/sign_in" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
