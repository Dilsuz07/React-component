import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {hello,world} = this.props
        return(
            <>
                <ul>
                    <li>If you prefer to learn by doing, start with our practical tutorial....{hello} </li>
                    <li>If you prefer to learn concepts step by step, start with our guide to main concepts......{world} </li>
                </ul>
            </>
        )
    }
}
export default Home;