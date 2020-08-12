import React from 'react'

class CurrentMeals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mondayMeal: this.props.data.mondayMeal,
            tuesdayMeal: this.props.data.tuesdayMeal,
            wednesdayMeal: this.props.data.wednesdayMeal,
            thursdayMeal: this.props.data.thursdayMeal,
            fridayMeal: this.props.data.fridayMeal,
            saturdayMeal: this.props.data.saturdayMeal,
            sundayMeal: this.props.data.sundayMeal
        }
        this.printingIngredients = this.printingIngredients.bind(this)
    }

    printingIngredients(ingredientList) {
        return ingredientList.map(item => {
            return <li key={item}>{item}</li>
        })
    }

    submitNewMeal(meal) {
        meal = {}
    }

    render() {
        return(
            <div>
                <h1>This Week's Meals</h1>
                <h3>Monday</h3>
                <p>{this.state.mondayMeal.label}</p>
                {this.printingIngredients(this.state.mondayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.mondayMeal.source}</p>

                <h3>Tuesday</h3>
                <p>{this.state.tuesdayMeal.label}</p>
                {this.printingIngredients(this.state.tuesdayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.tuesdayMeal.source}</p>

                <h3>Wednesday</h3>
                <p>{this.state.wednesdayMeal.label}</p>
                {this.printingIngredients(this.state.wednesdayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.wednesdayMeal.source}</p>

                <h3>Thursday</h3>
                <p>{this.state.thursdayMeal.label}</p>
                {this.printingIngredients(this.state.thursdayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.thursdayMeal.source}</p>

                <h3>Friday</h3>
                <p>{this.state.fridayMeal.label}</p>
                {this.printingIngredients(this.state.fridayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.fridayMeal.source}</p>

                <h3>Saturday</h3>
                <p>{this.state.saturdayMeal.label}</p>
                {this.printingIngredients(this.state.saturdayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.saturdayMeal.source}</p>

                <h3>Sunday</h3>
                <p>{this.state.sundayMeal.label}</p>
                {this.printingIngredients(this.state.sundayMeal.ingredientLines)}
                <p>Original Meal Source: {this.state.sundayMeal.source}</p>

            </div>
        )
    }
}

export default CurrentMeals
