import React from 'react'

import AddMeal from './AddMeal.js'

class CurrentMeals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mealsAreAssigned: this.props.data.mealsAreAssigned,
            mondayMeal: this.props.data.mondayMeal,
            mondayMealEditing: false,
            tuesdayMeal: this.props.data.tuesdayMeal,
            tuesdayMealEditing: false,
            wednesdayMeal: this.props.data.wednesdayMeal,
            wednesdayMealEditing: false,
            thursdayMeal: this.props.data.thursdayMeal,
            thursdayMealEditing: false,
            fridayMeal: this.props.data.fridayMeal,
            fridayMealEditing: false,
            saturdayMeal: this.props.data.saturdayMeal,
            saturdayMealEditing: false,
            sundayMeal: this.props.data.sundayMeal,
            sundayMealEditing: false,
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

    changingMeal(meal) {
        if (meal === 'monday') {
            this.setState({mondayMealEditing: !this.state.mondayMealEditing})
        }
        else if (meal === 'tuesday') {
            this.setState({tuesdayMealEditing: !this.state.tuesdayMealEditing})
        }
        else if (meal === 'wednesday') {
            this.setState({wednesdayMealEditing: !this.state.wednesdayMealEditing})
        }
        else if (meal === 'thursday') {
            this.setState({thursdayMealEditing: ! this.state.thursdayMealEditing})
        }
        else if (meal === 'friday') {
            this.setState({fridayMealEditing: !this.state.fridayMealEditing})
        }
        else if (meal === 'saturday') {
            this.setState({saturdayMealEditing: !this.state.saturdayMealEditing})
        }
        else if (meal === 'sunday') {
            this.setState({sundayMealEditing: !this.state.sundayMealEditing})
        }
    }

    render() {
        return(
            <div>
                <h1>This Week's Meals</h1>

                <h2>Monday</h2>
                {!this.state.mondayMealEditing ?
                <div>
                    <h3>{this.state.mondayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.mondayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.mondayMeal.source}</p>
                    <button onClick={() => this.changingMeal('monday')}>
                    Change Meal
                    </button>
                </div> :
                <AddMeal meal={this.state.mondayMeal}
                changingMeal={() => this.changingMeal('monday')}/>}

                <h2>Tuesday</h2>
                {!this.state.tuesdayMealEditing ?
                <div>
                    <h3>{this.state.tuesdayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.tuesdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.tuesdayMeal.source}</p>
                    <button onClick={() => this.changingMeal('tuesday')}>
                    Change Meal
                    </button>
                </div> :
                <AddMeal meal={this.state.tuesdayMeal}
                changingMeal={() => this.changingMeal('tuesday')}/>}

                <h2>Wednesday</h2>
                {!this.state.wednesdayMealEditing ?
                <div>
                    <h3>{this.state.wednesdayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.wednesdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.wednesdayMeal.source}</p>
                    <button onClick={() => this.changingMeal('wednesday')}>
                    Change Meal
                    </button>
                </div>:
                <AddMeal meal={this.state.wednesdayMeal}
                changingMeal={() => this.changingMeal('wednesday')}/>}

                <h2>Thursday</h2>
                {!this.state.thursdayMealEditing ?
                <div>
                    <h3>{this.state.thursdayMeal.label}</h3>
                    <p>Ingredients</p>
                    {this.printingIngredients(this.state.thursdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.thursdayMeal.source}</p>
                    <button onClick={() => this.changingMeal('thursday')}>
                    Change Meal
                    </button>
                </div>:
                <AddMeal meal={this.state.thursdayMeal}
                changingMeal={() => this.changingMeal('thursday')}/>}

                <h2>Friday</h2>
                {!this.state.fridayMealEditing ?
                <div>
                    <h3>{this.state.fridayMeal.label}</h3>
                    <p>Instructions</p>
                    {this.printingIngredients(this.state.fridayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.fridayMeal.source}</p>
                    <button onClick={() => this.changingMeal('friday')}>
                    Change Meal
                    </button>
                </div> :
                <AddMeal meal={this.state.fridayMeal}
                changingMeal={() => this.changingMeal('friday')}/>}

                <h2>Saturday</h2>
                {!this.state.saturdayMealEditing ?
                <div>
                    <h3>{this.state.saturdayMeal.label}</h3>
                    <p>Instructions</p>
                    {this.printingIngredients(this.state.saturdayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.saturdayMeal.source}</p>
                    <button onClick={() => this.changingMeal('saturday')}>
                    Change Meal
                    </button>
                </div>:
                <AddMeal meal={this.state.saturdayMeal}
                changingMeal={() => this.changingMeal('saturday')}/>}

                <h2>Sunday</h2>
                {!this.state.sundayMealEditing ?
                <div>
                    <h3>{this.state.sundayMeal.label}</h3>
                    <p>Instructions</p>
                    {this.printingIngredients(this.state.sundayMeal.ingredientLines)}
                    <p>Original Meal Source: {this.state.sundayMeal.source}</p>
                    <button onClick={() => this.changingMeal('sunday')}>
                    Change Meal
                    </button>
                </div> :
                <AddMeal meal={this.state.sundayMeal}
                changingMeal={() => this.changingMeal('sunday')}/>}

            </div>
        )
    }
}

export default CurrentMeals
