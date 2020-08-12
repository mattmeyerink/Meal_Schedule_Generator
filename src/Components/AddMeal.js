import React from 'react'

class AddMeal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meal: props.meal,
            label: "",
            ingredientsString: "",
            ingredientsLines: [],
            mealSource: "User"
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveIngredientsToArray = this.saveIngredientsToArray.bind(this)
        this.pushTogetherFinalMeal = this.pushTogetherFinalMeal.bind(this)
    }

    saveIngredientsToArray() {
        this.setState({ingredientsArray: this.state.ingredientsString.split(", ")})
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
        if (name === "ingredientsLines") {
            this.saveIngredientsToArray()
        }
    }

    pushTogetherFinalMeal(){
        const mealToReturn = {
            ...this.state.label,
            ...this.state.ingredientLines
        }
        this.setState({meal: mealToReturn})
        this.props.changingMeal()
    }

    render() {
        return(
            <div>
                <h3>New Meal</h3>
                <form>
                    <input type='textbox' placeholder="Name of Meal"
                    value={this.state.label} name="label"
                    onChange={this.handleChange}/>
                    <br/>
                    <br/>

                    <label>
                        Ingredients (items separated by a comma and a single space)
                    </label>
                    <br/>
                    <input type="text" value={this.state.ingredientLines}
                    name="ingredientsLines" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={this.pushTogetherFinalMeal}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddMeal
