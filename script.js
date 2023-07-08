const piece = {
    color: 1,
    id: 1,
    king: false,
}

function makePiece(team, id) {
    return {
        team: team,
        id: id,
        king: false
    };
}

board = [
    [null, makePiece(0, 1), null, makePiece(0, 2), null, makePiece(0, 3), null, makePiece(0, 4)],
    [makePiece(0, 5), null, makePiece(0, 6), null, makePiece(0, 7), null, makePiece(0, 8), null],
    [null, makePiece(0, 9), null, makePiece(0, 10), null, makePiece(0, 11), null, makePiece(0, 12)],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [makePiece(1, 1), null, makePiece(1, 2), null, makePiece(1, 3), null, makePiece(1, 4), null],
    [null, makePiece(1, 5), null, makePiece(1, 6), null, makePiece(1, 7), null, makePiece(1, 8)],
    [makePiece(1, 9), null, makePiece(1, 10), null, makePiece(1, 11), null, makePiece(1, 12), null],
]

dragObject = null;

function startDrag(event) {
    console.log(event);
    console.log(event.srcElement.parentElement.id);
    dragObject = event.srcElement;
    console.log(dragObject);
}

function allowDrop(event) {
    console.log(event);
    event.preventDefault();
}

function stopDrag(event) {
    console.log(event);
    event.target.appendChild(dragObject)
    /*Return function??*/
}
function removePiece(event) {
    console.log(event);
    event.target.remove()
}

goldpiece = document.getElementsByClassName("goldPiece");
console.log(goldpiece);

goldpiece.ondragstart = ondrag;

for (var i=0; i < 8; i++) {
    for (var j=0; j < 8; j++) {
        if (board[i][j] != null) {
            let piece = board[i][j];
            let element = document.createElement("div");
            if (piece.team == 0) {
                element.classList.add("goldPiece");
            } else {
                element.classList.add("blackPiece");
            }
            element.setAttribute("draggable", true);
            element.ondragstart = startDrag;
            element.textContent = String(piece.id);
            element.addEventListener("dragleave", removePiece)
            boardSpace = document.getElementById(String(i) + "_" + String(j));
            boardSpace.appendChild(element);
        }
    }
    /*function playersTurn() {
        
    } */ 
}

