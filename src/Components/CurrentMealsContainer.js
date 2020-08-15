import React from 'react'

import CurrentMealsComponent from './CurrentMealsComponent.js'

class CurrentMealsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mondayMeal: this.props.data.mondayMeal,
            mondayMealLabel: this.props.data.mondayMeal.label,
            mondayMealIngredients: this.props.data.mondayMeal.ingredientLines,
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
            <CurrentMealsComponent
            printingIngredients={this.printingIngredients}
            changingMeal={this.changingMeal}
            data={this.state}/>
        )
    }
}

export default CurrentMealsContainer
