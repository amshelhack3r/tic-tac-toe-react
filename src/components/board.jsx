import React, { useContext } from 'react'
import Cell from './cell'
import { calculateWinner } from '../util'
import GameContext from '../state/GameState'


export default function Board() {
    const { playablePiece, changePlayable, board, updateBoard, resetGame } = useContext(GameContext)

    const clearDom = () => document.querySelectorAll(".cell").forEach((item) => item.innerHTML = "")
    const restart = () => {
        resetGame()
        clearDom()
        document.querySelector('.alert').innerHTML = ""
    }
    const handleClick = (e, i) => {

        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (boardCopy[i - 1]) {
            alert(`You already clicked on that`)
            return;
        }
        // Put an X or an O in the clicked square
        boardCopy[i - 1] = playablePiece;

        const winner = calculateWinner(boardCopy)
        e.target.innerHTML = playablePiece

        if (winner) {
            document.querySelector('.alert').innerHTML = `The winner is ${winner}`
            if (window.confirm(`${winner} has won the game. Restart?`)) {
                restart();
            }
            return;
        }

        changePlayable()
        updateBoard(boardCopy)


    }
    return <>
        <h1>TIC-TAC-TOE</h1>
        <div className="controls">
            <button className="button-primary" onClick={restart}>Restart</button>
        </div>
        <div className="board">
            <Cell click={(e) => handleClick(e, 1)} />
            <Cell click={(e) => handleClick(e, 2)} />
            <Cell click={(e) => handleClick(e, 3)} />
            <Cell click={(e) => handleClick(e, 4)} />
            <Cell click={(e) => handleClick(e, 5)} />
            <Cell click={(e) => handleClick(e, 6)} />
            <Cell click={(e) => handleClick(e, 7)} />
            <Cell click={(e) => handleClick(e, 8)} />
            <Cell click={(e) => handleClick(e, 9)} />
        </div>
        <div className="alert"></div>

        <div className="how-to">
            <h4>How To Play</h4>
            <ul>
                <li>Its 3 in a  row that wins</li>
                <li>Horizontal and diagonal.</li>
                <li>X begins</li>
            </ul>
        </div>
    </>
}