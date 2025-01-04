/* get food information data as a prop from food display component
 */
import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({id, name, price, description, image}) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src ={image} alt="" />
            {
            /* If itemCount is 0. It shows an "add" button, itemcount increment 1 onclick
            prev represents the current value of itemCount when the function is called
            itemcount value increment by setitemcount function */
            !cartItems[id]
                ?<img className='add' onClick = {()=> addToCart(id)} src={assets.add_icon_white} />
/*                 If itemCount is greater than 0: The "add" button is replaced by a counter (<div> with className="food-item-counter" */
                : <div className="food-item-counter">
{/*               increment or decrement the itemCount state based on which button is clicked
 */}                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem