import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { CartContext } from "../../Context"

const CartWidgetComponent = () => {
    const { itemCount } = useContext(CartContext)

    return (
        <li className="nav-item">
            <a className="nav-link menu-white" aria-disabled="true" href="#" id="cartUpdate"><FontAwesomeIcon icon={faCartShopping} /><span> {itemCount}</span></a>
        </li>
    )
}

export default CartWidgetComponent