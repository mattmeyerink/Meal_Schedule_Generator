import React from 'react'

import AddMeal from './AddMeal.js'

class CurrentMeals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mealsAreAssigned: this.props.data.mealsAreAssigned,
            mondayMeal: this.props.data.mondayMeal,
            tuesdayMeal: this.props.data.tuesdayMeal,
            wednesdayMeal: this.props.data.wednesdayMeal,
            thursdayMeal: this.props.data.thursdayMeal,
            fridayMeal: this.props.data.fridayMeal,
            saturdayMeal: this.props.data.saturdayMeal,
            sundayMeal: this.props.data.sundayMeal,
            mealBeingChanged: ""
        }
        this.printingIngredients = this.printingIngredients.bind(this)
        this.changingMeal = this.changingMeal.bind(this)
    }

    printingIngredients(ingredientList) {
        return ingredientList.map(item => {
            return <li key={item}>{item}</li>
        })
    }

    changingMeal() {
        this.setState({mealBeingChanged: !this.state.mealBeingChanged})
    }

    render() {
        return(
            <div>
                {!this.state.mealBeingChanged ?
                <div>
                    <h1>This Week's Meals</h1>
                    <h3>Monday: {this.state.mondayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.mondayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.mondayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div> :
                <AddMeal meal={this.state.mondayMeal}
                changingMeal={this.changingMeal}/>}

                {!this.state.mealBeingChanged ?
                <div>
                    <h3>Tuesday: {this.state.tuesdayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.tuesdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.tuesdayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div> :
                <AddMeal meal={this.state.tuesdayMeal}
                changingMeal={this.changingMeal}/>}

                {!this.state.mealBeingChanged ?
                <div>
                    <h3>Wednesday: {this.state.wednesdayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.wednesdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.wednesdayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div>:
                <AddMeal meal={this.state.wednesdayMeal}
                changingMeal={this.changingMeal}/>}

                {!this.state.mealBeingChanged ?
                <div>
                    <h3>Thursday: {this.state.thursdayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.thursdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.thursdayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div>:
                <AddMeal meal={this.state.thursdayMeal}
                changingMeal={this.changingMeal}/>}

                {!this.state.mealBeingChanged ?
                <div>
                    <h3>Friday: {this.state.fridayMeal.label}</h3>
                    <p>Instructions</p>
                    {this.printingIngredients(this.state.fridayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.fridayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div> :
                <AddMeal meal={this.state.fridayMeal}
                changingMeal={this.changingMeal}/>}

                {!this.state.mealBeingChanged ?
                <div>
                    <h3>Saturday: {this.state.saturdayMeal.label}</h3>
                    <p>Instructions</p>
                    {this.printingIngredients(this.state.saturdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.saturdayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div>:
                <AddMeal meal={this.state.saturdayMeal}
                changingMeal={this.changingMeal}/>}

                {!this.state.mealBeingChanged ?
                <div>
                    <h3>Sunday: {this.state.sundayMeal.label}</h3>
                    <p>Instructions</p>
                    {this.printingIngredients(this.state.sundayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.sundayMeal.source}</p>
                    <button onClick={this.changingMeal}>Change Meal</button>
                </div> :
                <AddMeal meal={this.state.sundayMeal}
                changingMeal={this.changingMeal}/>}

            </div>
        )
    }
}

export default CurrentMeals
