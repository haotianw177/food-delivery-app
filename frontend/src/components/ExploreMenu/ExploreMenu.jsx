import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    // Destructure props for cleaner code
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a wide range of delicious dishes</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item, index) => {
                    return (
                        // prev parameter holds the current value of category.
                        // If the clicked menu item’s name (item.menu_name) matches prev (current category), 
                        // it resets the category to 'ALL'. when click on salad match the prev state salad ,means deselect and reset to all
                        // Otherwise, it sets the category to the clicked item’s name.
                        <div onClick = {()=>setCategory(prev => prev === item.menu_name ? 'ALL' : item.menu_name)} className="explore-menu-list-item" key={index}>
                            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu