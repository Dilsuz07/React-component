import React, { Component } from "react";

class Languages extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {ing,rus} = this.props
        return (
            <>
                <ul>
                    <li>Languages : {ing}</li>
                    <li>GitHub</li>
                </ul>
            </>
        )
    }

}

export default Languages;