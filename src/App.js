
import "./scss/main.scss";
import Board from "./components/board";
import { GameProvider } from "./state/GameState";
import { calculateWinner } from "./util";
function App() {
  console.log(calculateWinner([1, 2, 3]));
  return (
    <GameProvider>
      <div className="App">
        <Board />
      </div>
    </GameProvider>
  );
}

export default App;
