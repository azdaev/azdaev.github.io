const BOXES = document.querySelectorAll('.box');
const result = document.querySelector('#result');
const turnP = document.querySelector('.turn');
let turn = true;
let opened = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let x = [];
let o = [];
for (let i = 0; i < BOXES.length; i++) {
    BOXES[i].addEventListener('click', () => {
        if (turn == true && opened[i] == 1) {
            BOXES[i].innerHTML = "<p>X</p>";
            x.push(i);
        }
        if (turn == false && opened[i] == 1) {
            BOXES[i].innerHTML = "<p>O</p>";
            o.push(i);
        }
        if (opened[i] == 1) {
            turn = !turn
        }
        opened[i] = 0;
        x.sort();
        o.sort();
        console.log("update");
        console.log(x);
        console.log(o);
        if (didWin(x) == true) {
            opened = 0;
            result.innerText = "X WIN";
        }
        if (didWin(o) == true) {
            opened = 0;
            result.innerText = "O WIN";
        }
        if (turn == 1){
          turnP.innerText = "It is X's turn";
        } else {
          turnP.innerText = "It is O's turn";
        }
    })
};

function didWin(arr) {
    let len = arr.length;
    if (len < 3)
        return false;
    var firstDiff = arr[1] - arr[0];
    for (var i = 1; i < len - 1; ++i) {
        if (arr[i + 1] - arr[i] != firstDiff)
            return false;
    }
    return true;
}
