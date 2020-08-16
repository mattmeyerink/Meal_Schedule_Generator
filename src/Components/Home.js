import React from 'react'

function Home(props) {
    return(
        <div className="home_page">
            <h1>Your journey to an easy, organized meal plan starts here</h1>
            <button onClick={props.handleMealScheduleButton}>
            Begin Scheduling
            </button>
        </div>
    )
}

export default Home
