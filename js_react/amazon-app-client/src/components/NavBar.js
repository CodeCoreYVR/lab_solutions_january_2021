import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav>
            <NavLink to="/" > Home </NavLink>
            |
            <NavLink to="/products">Products</NavLink>
            {
                props.current_user ?
                    <>
                        Hello, {props.current_user.first_name}
                        <NavLink to="/products/new">New Product</NavLink>
                    </>
                    :
                    <NavLink to="/sign_in">Sign In</NavLink>
            }
        </nav>
    )
}