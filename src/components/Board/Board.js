import React from "react";

import Cell from "../Cell/Cell.js";
import Checker from "../Checker/Checker.js";

import "./Board.css"

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            winner: 0,
            turn: 1
        }

        this.cellClick = this.cellClick.bind(this);
        this.checkBoard = this.checkBoard.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

    }

    nextTurn() {
        this.checkBoard()

        if (this.state.winner === 0) {
            this.setState({turn: this.state.turn * -1})
        }

    }

    cellClick(row, col) {
        let new_board = this.state.board
        if (new_board[row][col] === 0 && this.state.winner === 0) { // valid move
            new_board[row][col] = this.state.turn
            this.nextTurn()
        }
        this.setState({board: new_board})

    }

    checkBoard() {
        let row_sums = [] // row, col, diag, antidiag
        // check rows
        for (let i = 0; i < 3; i++) {
            let row_sum = 0
            for (let j = 0; j < 3; j ++) {
                row_sum += this.state.board[i][j]
            }
            row_sums.push(row_sum)
        }
        // check columns
        for (let i = 0; i < 3; i++) {
            let col_sum = 0
            for (let j = 0; j < 3; j ++) {
                col_sum += this.state.board[j][i]
            }
            row_sums.push(col_sum)
        }
        // check diagonal (top left -> bottom right)
        let diag_sum = 0
        for (let i = 0; i < 3; i++) {
            diag_sum += this.state.board[i][i]
        }
        row_sums.push(diag_sum)
        //check anti diagonal (top right -> bottom left)
        let antidiag_sum = 0
        for (let i = 0; i < 3; i++) {
            antidiag_sum += this.state.board[i][2 - i]
        }
        row_sums.push(antidiag_sum)
        // check for winner
        for (let x in row_sums) {
            if (row_sums[x] === 3) {
                this.setState({winner: 1})
                return
            } else if (row_sums[x] === -3) {
                this.setState({winner: -1})
                return
            }
        }
        this.setState({winner: 0})
    }

    resetBoard() {
        this.setState({
            board: 
                [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ],
            winner: 0

    })
    }
    render() {
        return (
            <div className="tictactoe">
                <h1>Tic Tac Toe</h1>
                <h2>Turn : {this.state.turn === 1 ? "O" : "X"}</h2>

                <div className="board">
                    <div className="boardrow">
                        <Cell className="cell" row={0} col={0} value={this.state.board[0][0]} click={this.cellClick}/>
                        <Cell className="cell" row={0} col={1} value={this.state.board[0][1]} click={this.cellClick}/>
                        <Cell className="cell" row={0} col={2} value={this.state.board[0][2]} click={this.cellClick}/>
                    </div>
                    <div className="boardrow">
                        <Cell className="cell" row={1} col={0} value={this.state.board[1][0]} click={this.cellClick}/>
                        <Cell className="cell" row={1} col={1} value={this.state.board[1][1]} click={this.cellClick}/>
                        <Cell className="cell" row={1} col={2} value={this.state.board[1][2]} click={this.cellClick}/>
                    </div>
                    <div className="boardrow">
                        <Cell className="cell" row={2} col={0} value={this.state.board[2][0]} click={this.cellClick}/>
                        <Cell className="cell" row={2} col={1} value={this.state.board[2][1]} click={this.cellClick}/>
                        <Cell className="cell" row={2} col={2} value={this.state.board[2][2]} click={this.cellClick}/>
                    </div>
                    <Checker checkfunc={this.checkBoard} resetfunc={this.resetBoard} winner={this.state.winner}/>
                </div>
            </div>
        )
    }
}

export default Board
