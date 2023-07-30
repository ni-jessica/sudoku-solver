const defaultArray = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];

var sudokuArray = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];

const handleChange = (e: React.ChangeEvent) => {
  const id = e.target.id;
  const value = (e.target as HTMLInputElement).value;
  const index = id.split("-");
  const row: number = parseInt(index[0]);
  const col: number = parseInt(index[1]);

  sudokuArray[row][col] = value;
};

const canBePlaced = (row: number, col: number, value: string) => {
  // check if in row
  if (sudokuArray[row].includes(value)) return false;

  // check if in col
  for (let r = 0; r < 9; r++) if (sudokuArray[r][col] === value) return false;

  // check if in square
  const startRow = 3 * Math.floor(row / 3);
  const startCol = 3 * Math.floor(col / 3);

  for (let r = startRow; r < startRow + 3; r++)
    for (let c = startCol; c < startCol + 3; c++)
      if (sudokuArray[r][c] === value) return false;

  return true;
};

const solve = () => {
  // for every cell in the grid
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // if its empty
      if (sudokuArray[row][col] !== "") continue;
      // try every number 1-9
      for (let i = 1; i <= 9; i++) {
        const c = i.toString();
        // if that number is valid
        if (canBePlaced(row, col, c)) {
          sudokuArray[row][col] = c;
          // continue going through grid and return true if solution found
          if (solve()) return true;
        }
      }
      // solution wasnt found, set cell back to empty
      sudokuArray[row][col] = "";
      return false;
    }
  }
  // all cells filled!

  return true;
};

const solvePuzzle = () => {
  const hasSolution = solve();
  if (!hasSolution) console.log("no");

  
  console.log(sudokuArray);
};

const solveCell = () => {
  const hasSolution = solve();
  if (!hasSolution) console.log("no");
  console.log("cell");
};

const clear = () => {
  var fields = document.getElementsByTagName("input");
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].type === "text") {
      fields[i].value = "";
    }
  }
  sudokuArray = defaultArray;
};

export { handleChange, solvePuzzle, solveCell, clear };
