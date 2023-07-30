import { Button } from "./components/Button";
import { handleChange, solveCell, solvePuzzle, clear } from "./helpers";

const SudokuSolver = () => {

  return (
    <div className="container">
      <header className="text-5xl font-semibold pb-8 condense-text">
        Sudoku solver
      </header>

      <h1 className="text-lg condense-text">Enter the known numbers:</h1>

      <table id="sudoku-table">
        <tbody>
          <tr>
            <td>
              <input id="0-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="0-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="0-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="0-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="0-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="0-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="0-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="0-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="0-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="1-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="1-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="1-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="1-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="1-4" type="text" onChange={handleChange} />
            </td>
            <td>
              <input id="1-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="1-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="1-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="1-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="2-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="2-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="2-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="2-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="2-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="2-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="2-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="2-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="2-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="3-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="3-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="3-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="3-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="3-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="3-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="3-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="3-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="3-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="4-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="4-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="4-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="4-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="4-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="4-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="4-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="4-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="4-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="5-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="5-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="5-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="5-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="5-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="5-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="5-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="5-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="5-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="6-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="6-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="6-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="6-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="6-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="6-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="6-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="6-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="6-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="7-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="7-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="7-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="7-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="7-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="7-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="7-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="7-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="7-8" type="text" onChange={handleChange}/>
            </td>
          </tr>

          <tr>
            <td>
              <input id="8-0" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="8-1" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="8-2" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="8-3" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="8-4" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="8-5" type="text" onChange={handleChange}/>
            </td>

            <td>
              <input id="8-6" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="8-7" type="text" onChange={handleChange}/>
            </td>
            <td>
              <input id="8-8" type="text" onChange={handleChange}/>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex-col space-x-9 condense-text">
        <Button text="Solve puzzle" callback={solvePuzzle} />
        <Button text="Solve cell" callback={solveCell} />
        <Button text="Clear" callback={clear} />
      </div>
    </div>
  );
};

export default SudokuSolver;
