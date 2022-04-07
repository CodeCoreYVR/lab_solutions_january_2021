import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" > Home </NavLink>
            |
            <NavLink to="/products">Products</NavLink>
            |
            <NavLink to="/products/new">New Product</NavLink>
            |
            <NavLink to="/sign_in">Sign In</NavLink>
        </nav>
    )
}