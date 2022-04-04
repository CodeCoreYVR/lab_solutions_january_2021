import './App.css';
import ProductDetails from './components/ProductDetails';
import ReviewDetails from './components/ReviewDetails'

function App() {
  return (
    <div className="App">
      <ProductDetails
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
      />
    </div>
  );
}

export default App;
