import './App.css';
// import ProductDetails from './components/ProductDetails';
// import ReviewDetails from './components/ReviewDetails'
import ProductShowPage from './components/ProductShowPage'
import ProductIndexPage from './components/ProductIndexPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      {/* <ProductDetails
        title="Phone"
        description="This is a phone"
        price={200}
        created_at={new Date()}
        seller={{ full_name: "Admin" }}
      />
      <ReviewDetails
        rating={4}
        body="good good"
        created_at={new Date()}
        full_name="Test User"
      /> */}
      {/* <ProductIndexPage />
      <ProductShowPage /> */}
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* /products/12 */}
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={ProductIndexPage} />
          <Route path='/products/:id' component={ProductShowPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
