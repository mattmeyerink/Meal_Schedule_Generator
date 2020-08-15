import React from 'react'

class AddMeal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meal: this.props.meal,
            label: "",
            ingredientsString: "",
            ingredientsLines: [],
            source: "User"
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveIngredientsToArray = this.saveIngredientsToArray.bind(this)
        this.pushTogetherFinalMeal = this.pushTogetherFinalMeal.bind(this)
    }

    saveIngredientsToArray() {
        const ingredientsArray = this.state.ingredientsString.split(", ")
        console.log(ingredientsArray)
        this.setState({ingredientsLines: ingredientsArray})
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
        if (name === "ingredientsString") {
            this.saveIngredientsToArray()
        }
    }

    pushTogetherFinalMeal(){
        this.setState({meal: {
            label: this.state.label,
            ingredientList: this.state.ingredientsArray,
            source: this.state.source
        }})

        console.log(this.state.meal)

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
                    <input type="text" value={this.state.ingredientsString}
                    name="ingredientsString" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={this.pushTogetherFinalMeal}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddMeal
