import { Component } from 'react';
import productsData from '../productIndexData'


class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: productsData
        };
        this.createProduct = this.createProduct.bind(this);
    }
    createProduct(params) {
        this.setState((state) => {
            return {
                products: [
                    {
                        ...params,
                        created_at: new Date(),
                        id: Math.max(...state.products.map((product) => product.id)) + 1,
                        seller: { full_name: "Admin User" }
                    },
                    ...state.products
                ]
            };
        });
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
                                <b>{product.title}</b>
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