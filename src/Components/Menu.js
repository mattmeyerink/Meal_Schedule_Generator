import React from 'react'
import './Components.css'


function Menu(props){
    return(
        <div>
            <button name="home" onClick={props.changePage}
            className="menu_items">
                Home
            </button>

            <button name="mealScheduler" onClick={props.changePage}
            className="menu_items">
                Meal Scheduler
            </button>

            <button name="Profile" onClick={props.changePage}
            className="menu_items">
                Profile
            </button>
        </div>
    )
}

export default Menu
