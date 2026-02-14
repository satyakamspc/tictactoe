const board = document.querySelector(".board");
let currentplayer = 'O';
const recorder = [["", "", ""], ["", "", ""], ["", "", ""]]
const output = document.querySelector(".result");
function winner() {
    let winnerflg = false;
    let winnername = "";
    if (recorder[0][0] !== "" && recorder[0][0] === recorder[1][1] && recorder[1][1] === recorder[2][2]) {
        winnerflg = true;
        winnername = recorder[0][0];
    }
    else if (recorder[0][2] !== "" && recorder[0][2] === recorder[1][1] && recorder[1][1] === recorder[2][0]) {
        winnerflg = true;
        winnername = recorder[0][2];
    }
    for (let val = 0; val < recorder.length; val++) {
        if (recorder[val][0] !== "" && recorder[val][0] == recorder[val][1] && recorder[val][1] == recorder[val][2]) {
            winnerflg = true;
            winnername = recorder[val][0];
        }
        else if (recorder[0][val] !== "" && recorder[0][val] == recorder[1][val] && recorder[1][val] == recorder[2][val]) {
            winnerflg = true;
            winnername = recorder[0][val];

        }
    }
    if(winnerflg===true)
    {
        output.textContent="THE WINNER IS: "+winnername;
    }
}
board.addEventListener('click', (e) => {
    if (!e.target.classList.contains("cell")) {
        return;
    }
    const cell = e.target;
    if (cell.textContent !== "") {
        console.log("already placed")
    }
    else {
        cell.textContent = currentplayer;
        const cellindex = cell.dataset.index;
        const cellcol=cellindex%3;
        const cellrow = Math.floor(cellindex / 3);
        recorder[cellrow][cellcol] = currentplayer;
        winner();
        if (currentplayer == 'O') currentplayer = 'X';
        else currentplayer = 'O';
    }
})