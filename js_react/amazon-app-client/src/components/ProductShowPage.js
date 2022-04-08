import { Component } from 'react'
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../request'
import NewReviewForm from './NewReviewForm'

class ProductShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: {
                body: '',
                rating: 1
            }
        };
        this.handleReviewForm = this.handleReviewForm.bind(this);
        this.handleAddNewReview = this.handleAddNewReview.bind(this);
    }
    componentDidMount() {
        const pid = this.props.match.params.id;
        Product.one(pid).then(data => {
            console.log(data)
            this.setState({ product: data })
        })
        this.handleReviewForm = this.handleReviewForm.bind(this);
        this.handleAddNewReview = this.handleAddNewReview.bind(this);
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
    handleReviewForm(type, val) {
        if (type === "CHANGE_BODY") {
            const { body, ...rest } = this.state.review;
            this.setState({
                review: {
                    body: val,
                    ...rest
                }
            })
        } else {
            const { rating, ...rest } = this.state.review;
            this.setState({
                review: {
                    rating: val,
                    ...rest
                }
            })
        }
    }

    handleAddNewReview(params) {
        this.setState(
            {
                reviews: [
                    ...this.state.reviews,
                    {
                        id: 123,
                        ...params
                    }
                ]
            }
        )
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
                <NewReviewForm onChange={this.handleReviewForm} review={this.state.review} handleAddNewReview={this.handleAddNewReview} />
            </div>
        )
    }
}

export default ProductShowPage