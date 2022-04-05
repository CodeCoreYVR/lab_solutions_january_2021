import { Component } from 'react'
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import productData from '../productData';

class ProductShowPage extends Component {
    state = {
        product: productData
    }
    deleteReview(reviewId) {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    reviews: this.state.product.reviews.filter((review) => review.id !== reviewId)
                }
            }
        );
    }
    render() {
        return (
            <div>
                <ProductDetails
                    title={this.state.product.title}
                    description={this.state.product.description}
                    created_at={this.state.product.created_at}
                    seller={this.state.product.seller}
                    price={this.state.product.price}
                />
                <ReviewList onReviewDelete={(id) => this.deleteReview(id)} reviewList={this.state.product.reviews} />
            </div>
        )
    }
}

export default ProductShowPage