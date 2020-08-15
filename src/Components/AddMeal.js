import React from 'react'

function AddMeal(props) {

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

export default AddMeal
