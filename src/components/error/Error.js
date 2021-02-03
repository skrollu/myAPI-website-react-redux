import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './error.sass'

export default class Error extends Component {
    render() {
        return (
            <div className="error">
                <Link to="/">                    
                    <h1>Lost ?? Go to home with me</h1>
                </Link>
            </div>
        )
    }
}
