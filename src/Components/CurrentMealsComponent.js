import React from 'react'

import AddMeal from './AddMeal.js'

function CurrentMealsComponent(props) {
    return(
        <div>
            <h1>This Week's Meals</h1>

            <h2>Monday</h2>
            {!props.data.mondayMealEditing ?
            <div>
                <h3>{props.data.mondayMeal.label}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.mondayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.mondayMeal.source}</p>
                <button onClick={() => props.changingMeal('monday')}>
                Change Meal
                </button>
            </div> :
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.mondayMealLabel} name="mondayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.mondayMealIngredients}
                    name="mondayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('monday')}>
                    Submit
                    </button>
                </form>
            </div>}

            <h2>Tuesday</h2>

            {!props.data.tuesdayMealEditing ?
            <div>
                <h3>{props.data.tuesdayMeal.label}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.tuesdayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.tuesdayMeal.source}</p>
                <button onClick={() => props.changingMeal('tuesday')}>
                Change Meal
                </button>
            </div> :
            <AddMeal meal={props.data.tuesdayMeal}
            changingMeal={() => props.changingMeal('tuesday')}/>}

            <h2>Wednesday</h2>
            {!props.data.wednesdayMealEditing ?
            <div>
                <h3>{props.data.wednesdayMeal.label}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.wednesdayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.wednesdayMeal.source}</p>
                <button onClick={() => props.changingMeal('wednesday')}>
                Change Meal
                </button>
            </div>:
            <AddMeal meal={props.data.wednesdayMeal}
            changingMeal={() => props.changingMeal('wednesday')}/>}

            <h2>Thursday</h2>
            {!props.data.thursdayMealEditing ?
            <div>
                <h3>{props.data.thursdayMeal.label}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.thursdayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.thursdayMeal.source}</p>
                <button onClick={() => props.changingMeal('thursday')}>
                Change Meal
                </button>
            </div>:
            <AddMeal meal={props.data.thursdayMeal}
            changingMeal={() => props.changingMeal('thursday')}/>}

            <h2>Friday</h2>
            {!props.data.fridayMealEditing ?
            <div>
                <h3>{props.data.fridayMeal.label}</h3>
                <p>Instructions</p>
                {props.printingIngredients(props.data.fridayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.fridayMeal.source}</p>
                <button onClick={() => props.changingMeal('friday')}>
                Change Meal
                </button>
            </div> :
            <AddMeal meal={props.data.fridayMeal}
            changingMeal={() => props.changingMeal('friday')}/>}

            <h2>Saturday</h2>
            {!props.data.saturdayMealEditing ?
            <div>
                <h3>{props.data.saturdayMeal.label}</h3>
                <p>Instructions</p>
                {props.printingIngredients(props.data.saturdayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.saturdayMeal.source}</p>
                <button onClick={() => props.changingMeal('saturday')}>
                Change Meal
                </button>
            </div>:
            <AddMeal meal={props.data.saturdayMeal}
            changingMeal={() => props.changingMeal('saturday')}/>}

            <h2>Sunday</h2>
            {!props.data.sundayMealEditing ?
            <div>
                <h3>{props.data.sundayMeal.label}</h3>
                <p>Instructions</p>
                {props.printingIngredients(props.data.sundayMeal.ingredientLines)}
                <p>Original Meal Source: {props.data.sundayMeal.source}</p>
                <button onClick={() => props.changinMeal('sunday')}>
                Change Meal
                </button>
            </div> :
            <AddMeal meal={props.data.sundayMeal}
            changingMeal={() => props.changinMeal('sunday')}/>}

        </div>
    )
}

export default CurrentMealsComponent
