import React from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react'
import {Amplify, Auth} from 'aws-amplify'
import awsconfig from './aws-exports'

import Header from './Components/Header.js'
import Menu from './Components/Menu.js'
import Profile from './Components/Profile.js'
import Home from './Components/Home.js'
import MealScheduler from './Components/MealScheduler.js'

Amplify.configure(awsconfig)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUserEmail: "",
            currentPage: "home",
            currentPageElement: <Home />
        }
        this.changePage = this.changePage.bind(this)
    }

    async componentDidMount() {
        const userInfo = await Auth.currentUserInfo()
        this.setState({currentUserEmail: userInfo.attributes.email})
    }

    changePage(currentPage) {
        this.setState({currentPage: currentPage})

        if (currentPage === "Profile") {
            this.setState({
                currentPageElement:
                <Profile />
            })
        }
        else if (currentPage === "home") {
            this.setState({
                currentPageElement:
                <Home />
            })
        }
        else if (currentPage === "mealScheduler") {
            this.setState({
                currentPageElement:
                <MealScheduler />
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Menu changePage={this.changePage} />
                {this.state.currentPageElement}
            </div>
        )

    }
}

export default withAuthenticator(App, { includeGreetings: false })
