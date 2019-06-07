const squares = document.querySelectorAll('.square');
const p = document.querySelector('p');
const h2 = document.querySelector('h2');
let xTurn = 1;
busySquares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
xSquares = [];
oSquares = [];
const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
];
let gameIsOver;
for (let i = 0, len = 9; i < len; i++) {
    squares[i].addEventListener('click', () => {
        if (busySquares[i] == 1) return null;
        let node = document.createElement('img');
        if (xTurn == 1) {
            node.setAttribute("src", "./cross.png");
            xSquares.push(i + 1);
            xSquares.sort();
            h2.innerHTML = "O's turn";
            for (let n = 0; n < 8; n++) {
                if (contain(winCombos[n], xSquares) == true) {
                    p.innerHTML = "X wins!";
                    for (let x = 0; x < busySquares.length; x++) {
                        busySquares[x] = 1;
                    }
                }
            }
        } else {
            node.setAttribute("src", "./circle.png");
            oSquares.push(i + 1);
            oSquares.sort();
            h2.innerHTML = "X's turn";
            for (let n = 0; n < 8; n++) {
                if (contain(winCombos[n], oSquares) == true) {
                    p.innerHTML = "O wins!";
                    for (let x = 0; x < busySquares.length; x++) {
                        busySquares[x] = 1
                    }
                }
            }
        }
        squares[i].appendChild(node);
        busySquares[i] = 1;
        xTurn = !xTurn;
    })
}

let contain = function (arr1, arr2) {
    let win = [0, 0, 0];
    for (let i = 0; i < arr1.length; i++) {
        for (let d = 0; d < arr2.length; d++) {
            if (arr1[i] == arr2[d]) {
                win[i] = 1;
            };
        };
    };
    if (win[0] == 1 && win[1] == 1 && win[2] == 1) {
        return true;
    } else {
        return false;
    }
}