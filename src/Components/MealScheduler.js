import React from 'react'

import CurrentMeals from './CurrentMeals.js'

class MealScheduler extends React.Component {
    constructor() {
        super()
        this.state = {
            possibleMeals: [],
            assignedMeals: [],
            mealsAreAssigned: false
        }
        this.assignMeals = this.assignMeals.bind(this)
    }

    componentDidMount() {
        const url = "https://api.edamam.com/search?q=balanced&app_id=6509b4bd&" +
        "app_key=f2d99a5d7c8852983396755420e3d9d9&calories=500-1000"
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                possibleMeals: data.hits
            }))
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
    }

    render() {
        return(
            <div>
                <button onClick={this.assignMeals}>
                    Schedule Your Meals!
                </button>
                <CurrentMeals assignedMeals={this.state.assignedMeals}
                mealsAreAssigned={this.state.mealsAreAssigned}/>
            </div>
        )
    }
}

export default MealScheduler
