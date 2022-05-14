import React from "react";
import "./Checker.css";

class Checker extends React.Component {
    constructor(props) {
        super(props);

        this.checkBoard = this.checkBoard.bind(this)
        this.resetBoard = this.resetBoard.bind(this)
    }

    checkBoard() {
        this.props.checkfunc();
    }
    resetBoard() {
        this.props.resetfunc();
    }
    render() {
        return (
            <div className="checker">
                <h1 className="winner">Winner: {this.props.winner !== 0 && (this.props.winner === 1 ? "O wins!" : "X wins!")}</h1>
                {/* <button onClick={this.checkBoard}>Check!</button> */}
                <button className="newgame" onClick={this.resetBoard}>New Game</button>
            </div>
        )
    }
}

export default Checker;