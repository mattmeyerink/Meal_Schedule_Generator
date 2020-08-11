import React from 'react'

function CurrentMeals(props) {
    let mondayMeal
    let tuesdayMeal
    let wednesdayMeal
    let thursdayMeal
    let fridayMeal
    let saturdayMeal
    let sundayMeal

    if (props.mealsAreAssigned) {
        mondayMeal = props.assignedMeals[0].recipe
        tuesdayMeal = props.assignedMeals[1].recipe
        wednesdayMeal = props.assignedMeals[2].recipe
        thursdayMeal = props.assignedMeals[3].recipe
        fridayMeal = props.assignedMeals[4].recipe
        saturdayMeal = props.assignedMeals[5].recipe
        sundayMeal = props.assignedMeals[6].recipe
    }



    function printingMealSchedule() {
        function printingIngredients(ingredientList) {
            return ingredientList.map(item => {
                return <li key={item}>{item}</li>
            })
        }
        return(
            <div>
                <h3>Monday</h3>
                <p>{mondayMeal.label}</p>
                {printingIngredients(mondayMeal.ingredientLines)}

                <h3>Tuesday</h3>
                <p>{tuesdayMeal.label}</p>
                {printingIngredients(tuesdayMeal.ingredientLines)}

                <h3>Wednesday</h3>
                <p>{wednesdayMeal.label}</p>
                {printingIngredients(wednesdayMeal.ingredientLines)}

                <h3>Thursday</h3>
                <p>{thursdayMeal.label}</p>
                {printingIngredients(thursdayMeal.ingredientLines)}

                <h3>Friday</h3>
                <p>{fridayMeal.label}</p>
                {printingIngredients(fridayMeal.ingredientLines)}

                <h3>Saturday</h3>
                <p>{saturdayMeal.label}</p>
                {printingIngredients(saturdayMeal.ingredientLines)}

                <h3>Sunday</h3>
                <p>{sundayMeal.label}</p>
                {printingIngredients(sundayMeal.ingredientLines)}
            </div>
        )
    }
    return(
        <div>
            {props.mealsAreAssigned ?
            printingMealSchedule() :
            "Meals are not assigned"}
        </div>
    )
}

export default CurrentMeals
