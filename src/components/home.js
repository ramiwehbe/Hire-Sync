import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div style = {{padding: 30}}>
                <h4>LET US MAKE IT HAPPEN</h4>
                <img style={imageStyle} src="https://open.buffer.com/wp-content/uploads/2018/02/simone-hutsch-576365-unsplash-1024x1258.jpg" />
            </div>
        )

    }
}

export default Home
