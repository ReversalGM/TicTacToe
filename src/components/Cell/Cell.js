import React from "react";

import "./Cell.css"

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick(event) {
        this.props.click(this.props.row, this.props.col);
    }
    render() {
        return (
            <div className="cell">
                <button onClick={this.buttonClick}>{
                // this.props.row + "," + 
                // this.props.col + 
                // this.props.value + 
                ["X", "-", "O"][this.props.value + 1]}</button>
            </div>
        )
    }
}

export default Cell