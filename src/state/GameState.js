import { createContext, useReducer } from 'react'



const initialState = {
    playablePiece: "X",
    board: Array(9).fill(null)
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGEPLAYABLE":
            return state.playablePiece === "X" ? {
                ...state,
                playablePiece: "O"
            } : {
                    ...state,
                    playablePiece: "X"
                }

        case "UPDATEBOARD":
            return {
                ...state,
                board: action.payload
            }

        case "GAMERESET":
            return {
                ...state,
                playablePiece: "X",
                board: Array(9).fill(null)
            }

        default:
            return state
    }
}



const GameContext = createContext(initialState)

export const GameProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const changePlayable = () => dispatch({ type: "CHANGEPLAYABLE" })
    const updateBoard = (newboard) => dispatch({ type: "UPDATEBOARD", payload: newboard })
    const resetGame = () => dispatch({ type: "GAMERESET" })
    return (
        <GameContext.Provider value={{
            playablePiece: state.playablePiece,
            changePlayable,
            updateBoard,
            resetGame,
            board: state.board,
        }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext