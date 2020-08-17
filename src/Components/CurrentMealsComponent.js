import React from 'react'

import './Components.css'

function CurrentMealsComponent(props) {
    return(
        <div className="current_meals">
            <h1>This Week's Meals</h1>

            <h2>Monday</h2>
            {!props.data.mondayMealEditing ?
            <div>
                <h3>{props.data.mondayMealLabel}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.mondayMealIngredients)}
                <p>Original Meal Source: {props.data.mondayMealSource}</p>
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
                <h3>{props.data.tuesdayMealLabel}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.tuesdayMealIngredients)}
                <p>Original Meal Source: {props.data.tuesdayMealSource}</p>
                <button onClick={() => props.changingMeal('tuesday')}>
                Change Meal
                </button>
            </div> :
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.tuesdayMealLabel} name="tuesdayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.tuesdayMealIngredients}
                    name="tuesdayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('tuesday')}>
                    Submit
                    </button>
                </form>
            </div>}

            <h2>Wednesday</h2>
            {!props.data.wednesdayMealEditing ?
            <div>
                <h3>{props.data.wednesdayMealLabel}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.wednesdayMealIngredients)}
                <p>Original Meal Source: {props.data.wednesdayMealSource}</p>
                <button onClick={() => props.changingMeal('wednesday')}>
                Change Meal
                </button>
            </div>:
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.wednesdayMealLabel} name="wednesdayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.wednesdayMealIngredients}
                    name="wednesdayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('wednesday')}>
                    Submit
                    </button>
                </form>
            </div>}

            <h2>Thursday</h2>
            {!props.data.thursdayMealEditing ?
            <div>
                <h3>{props.data.thursdayMealLabel}</h3>
                <p>Ingredients</p>
                {props.printingIngredients(props.data.thursdayMealIngredients)}
                <p>Original Meal Source: {props.data.thursdayMealSource}</p>
                <button onClick={() => props.changingMeal('thursday')}>
                Change Meal
                </button>
            </div>:
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.thursdayMealLabel} name="thursdayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.thursdayMealIngredients}
                    name="thursdayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('thursday')}>
                    Submit
                    </button>
                </form>
            </div>}

            <h2>Friday</h2>
            {!props.data.fridayMealEditing ?
            <div>
                <h3>{props.data.fridayMealLabel}</h3>
                <p>Instructions</p>
                {props.printingIngredients(props.data.fridayMealIngredients)}
                <p>Original Meal Source: {props.data.fridayMealSource}</p>
                <button onClick={() => props.changingMeal('friday')}>
                Change Meal
                </button>
            </div> :
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.fridayMealLabel} name="fridayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.fridayMealIngredients}
                    name="fridayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('friday')}>
                    Submit
                    </button>
                </form>
            </div>}

            <h2>Saturday</h2>
            {!props.data.saturdayMealEditing ?
            <div>
                <h3>{props.data.saturdayMealLabel}</h3>
                <p>Instructions</p>
                {props.printingIngredients(props.data.saturdayMealIngredients)}
                <p>Original Meal Source: {props.data.saturdayMealSource}</p>
                <button onClick={() => props.changingMeal('saturday')}>
                Change Meal
                </button>
            </div>:
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.saturdayMealLabel} name="saturdayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.saturdayMealIngredients}
                    name="saturdayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('saturday')}>
                    Submit
                    </button>
                </form>
            </div>}

            <h2>Sunday</h2>
            {!props.data.sundayMealEditing ?
            <div>
                <h3>{props.data.sundayMealLabel}</h3>
                <p>Instructions</p>
                {props.printingIngredients(props.data.sundayMealIngredients)}
                <p>Original Meal Source: {props.data.sundayMealSource}</p>
                <button onClick={() => props.changingMeal('sunday')}>
                Change Meal
                </button>
            </div> :
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={props.sundayMealLabel} name="sundayMealLabel"
                    onChange={props.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={props.sundayMealIngredients}
                    name="sundayMealIngredients" onChange={props.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => props.changingMeal('sunday')}>
                    Submit
                    </button>
                </form>
            </div>}

        </div>
    )
}

export default CurrentMealsComponent
