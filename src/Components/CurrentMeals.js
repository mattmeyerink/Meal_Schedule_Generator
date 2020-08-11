import React from 'react'

function CurrentMeals(props) {
    return(
        <div>
            {props.mealsAreAssigned ?
            "Meals have been successfully assigned" :
            "Meals are not assigned"}
        </div>
    )
}

export default CurrentMeals
