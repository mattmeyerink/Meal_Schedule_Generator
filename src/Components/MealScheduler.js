import React from 'react'

import CurrentMealsContainer from './CurrentMealsContainer.js'

class MealScheduler extends React.Component {
    constructor() {
        super()
        this.state = {

            possibleMeals: [],
            assignedMeals: [],
            mealsAreAssigned: false,

            mondayMeal: {},
            tuesdayMeal: {},
            wednesdayMeal: {},
            thursdayMeal: {},
            fridayMeal: {},
            saturdayMeal: {},
            sundayMeal: {}
        }
        this.assignMeals = this.assignMeals.bind(this)
    }

    componentDidMount() {
        this.setState({possibleMeals: this.props.possibleMeals})
    }

    assignMeals() {
        const daysPerWeek = 7
        const mealsAlreadyUsed = []
        for (let i = 0; i < daysPerWeek; i++) {
            let randomMeal = Math.floor(Math.random() * Math.floor(10))
            while (mealsAlreadyUsed.includes(randomMeal)){
                randomMeal = Math.floor(Math.random() * Math.floor(10))
            }
            const newMeal = this.state.assignedMeals.push(this.state.possibleMeals[randomMeal])
            this.setState(prevState => {
                return (
                    newMeal
                )
            })
            mealsAlreadyUsed.push(randomMeal)
        }
        this.setState({mealsAreAssigned: true})
        this.setState({mondayMeal: this.state.assignedMeals[0].recipe})
        this.setState({tuesdayMeal: this.state.assignedMeals[1].recipe})
        this.setState({wednesdayMeal: this.state.assignedMeals[2].recipe})
        this.setState({thursdayMeal: this.state.assignedMeals[3].recipe})
        this.setState({fridayMeal: this.state.assignedMeals[4].recipe})
        this.setState({saturdayMeal: this.state.assignedMeals[5].recipe})
        this.setState({sundayMeal: this.state.assignedMeals[6].recipe})
    }

    render() {
        return(
            <div>
                {this.state.mealsAreAssigned ?
                <CurrentMealsContainer data = {this.state} /> :
                <div className="meal_scheduler_before_scheduled">
                    <button onClick={this.assignMeals}>
                        Schedule Your Meals!
                    </button>
                </div>
                }
            </div>
        )
    }
}

export default MealScheduler
