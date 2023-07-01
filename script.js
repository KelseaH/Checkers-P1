piece = {
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
    [null, makePiece(1, 1), null, makePiece(0, 2), null, makePiece(0, 3), null, makePiece(0, 7)],
    [makePiece(1, 0), null, makePiece(1, 2), null, makePiece(1, 4), null, makePiece(1, 6), null],
    [null, makePiece(2, 1), null, makePiece(2, 3), null, makePiece(2, 5), null, makePiece(2, 7)],
    [makePiece(3, 0), null, makePiece(3, 2), null, makePiece(3, 4), null, makePiece(3, 6), null],
    [null, makePiece(4, 1), null, makePiece(4, 3), null, makePiece(4, 5), null, null],
    [makePiece(5, 0), null, null, null, null, null, null, null],
    [null, makePiece(6, 1), null, null, null, null, null, null],
    [makePiece(7, 0), null, null, null, null, null, null, null],
]
/*
function splitId(str_id) {
    return [Number(str_id[0]), Number(str_id[2])];
}*/

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
}

goldpeice = document.getElementsByClassName("goldPiece");
console.log(goldpeice);

goldpeice.ondragstart = ondrag;

for (var i=0; i < 1; i++) {
    for (var j=0; j < 8; j++) {
        if (board[i][j] != null) {
            let peice = board[i][j];
            let element = document.createElement("div");
            if (peice.team == 0) {
                element.classList.add("goldPiece");
            } else {
                element.classList.add("blackPiece");
            }
            element.setAttribute("draggable", true);
            element.ondragstart = startDrag;
            element.textContent = String(peice.id);
            boardSpace = document.getElementById(String(j) + "_" + String(i));
            boardSpace.appendChild(element);
        }
    }
}

