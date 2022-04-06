import { Component } from 'react';
import { Product } from '../request'
import { NavLink } from 'react-router-dom'

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        Product.all().then(data => {
            this.setState(
                {
                    products: data
                }
            )
        })
    }
    deleteProduct(id) {
        this.setState({ products: this.state.products.filter((element) => element.id !== id) });
    }
    render() {
        return (
            <main>
                <h1>Products</h1>
                <ul>
                    {this.state.products.map((product, index) => (
                        <li key={index}>
                            <p>
                                <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
                                <button className="ui right floated red button" onClick={() => this.deleteProduct(product.id)} >
                                    Delete
                                </button>
                                <br />
                                <small>Price: {product.price} </small>
                                <br />
                                <small>Created at: {new Date(product.created_at).toLocaleDateString()}</small>
                                <br />
                                <small>Seller: {product.seller.full_name}</small>
                                <br />
                            </p>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}

export default ProductIndexPage;