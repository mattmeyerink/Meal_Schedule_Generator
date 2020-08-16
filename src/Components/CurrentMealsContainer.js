import React from 'react'

import CurrentMealsComponent from './CurrentMealsComponent.js'

class CurrentMealsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mondayMeal: this.props.data.mondayMeal,
            mondayMealLabel: this.props.data.mondayMeal.label,
            mondayMealIngredients: this.props.data.mondayMeal.ingredientLines,
            mondayMealSource: this.props.data.mondayMeal.source,
            mondayMealEditing: false,

            tuesdayMeal: this.props.data.tuesdayMeal,
            tuesdayMealLabel: this.props.data.tuesdayMeal.label,
            tuesdayMealIngredients: this.props.data.tuesdayMeal.ingredientLines,
            tuesdayMealSource: this.props.data.tuesdayMeal.source,
            tuesdayMealEditing: false,

            wednesdayMeal: this.props.data.wednesdayMeal,
            wednesdayMealLabel: this.props.data.wednesdayMeal.label,
            wednesdayMealIngredients: this.props.data.wednesdayMeal.ingredientLines,
            wednesdayMealSource: this.props.data.wednesdayMeal.source,
            wednesdayMealEditing: false,

            thursdayMeal: this.props.data.thursdayMeal,
            thursdayMealLabel: this.props.data.thursdayMeal.label,
            thursdayMealIngredients: this.props.data.thursdayMeal.ingredientLines,
            thursdayMealSource: this.props.data.thursdayMeal.source,
            thursdayMealEditing: false,

            fridayMeal: this.props.data.fridayMeal,
            fridayMealLabel: this.props.data.fridayMeal.label,
            fridayMealIngredients: this.props.data.fridayMeal.ingredientLines,
            fridayMealSource: this.props.data.fridayMeal.source,
            fridayMealEditing: false,

            saturdayMeal: this.props.data.saturdayMeal,
            saturdayMealLabel: this.props.data.saturdayMeal.label,
            saturdayMealIngredients: this.props.data.saturdayMeal.ingredientLines,
            saturdayMealSource: this.props.data.saturdayMeal.source,
            saturdayMealEditing: false,

            sundayMeal: this.props.data.sundayMeal,
            sundayMealLabel: this.props.data.sundayMeal.label,
            sundayMealIngredients: this.props.data.sundayMeal.ingredientLines,
            sundayMealSource: this.props.data.sundayMeal.source,
            sundayMealEditing: false,

            mealBeingChanged: ""
        }
        this.printingIngredients = this.printingIngredients.bind(this)
        this.changingMeal = this.changingMeal.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    printingIngredients(ingredientList) {
        return ingredientList.map(item => {
            return <li key={item}>{item}</li>
        })
    }

    changingMeal(meal) {
        if (meal === 'monday') {
            this.setState({
                mondayMealEditing: !this.state.mondayMealEditing,
                mondayMealSource: "User"
            })
        }
        else if (meal === 'tuesday') {
            this.setState({
                tuesdayMealEditing: !this.state.tuesdayMealEditing,
                tuesdayMealSource: "User"
            })
        }
        else if (meal === 'wednesday') {
            this.setState({
                wednesdayMealEditing: !this.state.wednesdayMealEditing,
                wednesdayMealSource: "User"
            })
        }
        else if (meal === 'thursday') {
            this.setState({
                thursdayMealEditing: ! this.state.thursdayMealEditing,
                thursdayMealSource: "User"
            })
        }
        else if (meal === 'friday') {
            this.setState({
                fridayMealEditing: !this.state.fridayMealEditing,
                fridayMealSource: "User"
            })
        }
        else if (meal === 'saturday') {
            this.setState({
                saturdayMealEditing: !this.state.saturdayMealEditing,
                saturdayMealSource: "User"
            })
        }
        else if (meal === 'sunday') {
            this.setState({
                sundayMealEditing: !this.state.sundayMealEditing,
                sundayMealSource: "User"
            })
        }
    }

    handleChange(event){
        let {name, value} = event.target
        if (name.includes('Ingredients')) {
            let arrayIngredients = value.split(',')
            value = arrayIngredients
        }
        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
            <CurrentMealsComponent
            printingIngredients={this.printingIngredients}
            changingMeal={this.changingMeal}
            handleChange={this.handleChange}
            data={this.state}/>
        )
    }
}

export default CurrentMealsContainer
