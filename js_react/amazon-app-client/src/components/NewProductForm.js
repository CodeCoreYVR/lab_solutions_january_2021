import { Product } from '../request'
function NewProductForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        Product.create({
            title: formData.get('title'),
            price: formData.get('price'),
            description: formData.get("description")
        }).then(data => {
            const pid = data.id;
            props.history.push(`/products/${pid}`)
        })
        currentTarget.reset();
    }
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Please Enter Title" />
            </div>
            <div className="field">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" placeholder="Please Enter Price" />
            </div>
            <div className="field">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" placeholder="Please Enter Title" />
            </div>
            <button className="ui button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default NewProductForm;