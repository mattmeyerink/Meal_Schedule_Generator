import React from 'react'

class MealScheduler extends React.Component {
    constructor() {
        super()
        this.state = {
            possibleMeals: [],
            assignedMeals: []
        }
    }

    componentDidMount() {
        const url = "https://api.edamam.com/search?q=chicken&app_id=6509b4bd&" +
        "app_key=f2d99a5d7c8852983396755420e3d9d9&calories=500-1000"
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                possibleMeals: data.hits
            }))
    }

    render() {
        console.log(this.state.possibleMeals)
        return(
            <div>
                This will be the Meal Scheduler!
            </div>
        )
    }
}

export default MealScheduler
