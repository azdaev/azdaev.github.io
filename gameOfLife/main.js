const rows = 40
const cols = 40
const start = document.querySelector('#start')
const reworld = document.querySelector('#reset')
let started = false
let timer
let evolutionSpeed = 200


let currGen = new Array(rows)
let nextGen = new Array(rows)

let createWorld = () => {
  let world = document.querySelector('#world')
  let tbl = document.createElement('table')
  tbl.setAttribute('id', 'worldgrid')
  for (let i = 0; i < rows; i++){
    let tr = document.createElement('tr')
    for (let j = 0; j < cols; j++){
      let cell = document.createElement('td')
      cell.setAttribute('id', `${i}_${j}`)
      cell.setAttribute('class', 'dead')
      cell.addEventListener('click', cellClick)
      tr.appendChild(cell)
    }
    tbl.appendChild(tr)
  }
  world.appendChild(tbl)
}

let cellClick = (e) => {
  let loc = e.target.id.split('_')
  let row = +loc[0]
  let col = +loc[1]
  
  console.log(loc)
  if (e.target.className == 'alive'){
    e.target.setAttribute('class', 'dead')
  } else {
    e.target.setAttribute('class', 'alive')
  }
  currGen[row][col] = 1 - currGen[row][col]
}

let createGenArrays = () => {
  for (let i = 0; i < rows; i++) {
    currGen[i] = new Array(cols);
    nextGen[i] = new Array(cols);
  }
}

let initGenArrays = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      currGen[i][j] = 0;
      nextGen[i][j] = 0;
    }
  }
}

let countNeighbours = (row, col) => {
  let count = 0
  let nrow = +row
  let ncol = +col
  if (ncol > 0 && nrow > 0 && ncol < cols-1 && nrow < rows-1){
    count += currGen[nrow-1][ncol-1]
    count += currGen[nrow-1][ncol]
    count += currGen[nrow-1][ncol+1]
    count += currGen[nrow][ncol-1]
    count += currGen[nrow][ncol+1]
    count += currGen[nrow+1][ncol-1]
    count += currGen[nrow+1][ncol]
    count += currGen[nrow+1][ncol+1]
  }
  return count
}

let changeNextGen = () => {
  for (row in currGen){
    for (col in currGen[row]){
      let neighbours = countNeighbours(row, col)
      if (currGen[row][col] == 1) {
        if (neighbours == 2 || neighbours == 3) {
          nextGen[row][col] = 1
        } else {
          nextGen[row][col] = 0
        }
      } else {
        if (neighbours == 3) {
          nextGen[row][col] = 1
        }
      }
    }
  }
}

let changeCurrGen = () => {
  for (row in currGen) {
    for (col in currGen[row]) {
      currGen[row][col] = nextGen[row][col];
      nextGen[row][col] = 0;
    }
  }
}

let updateWorld = () => {
  let cell = ''
  for (row in currGen){
    for (col in currGen[row]){
      cell = document.getElementById(row + '_' + col)
      if (currGen[row][col] == 0) {
        cell.setAttribute('class', 'dead');
      } else {
        cell.setAttribute('class', 'alive')
      }
    }
  }
}

let evolve = () => {
  changeNextGen()
  changeCurrGen()
  updateWorld()
  
  if (started) {
    timer = setTimeout(evolve, evolutionSpeed);
  }
}

let startStop = () => {
  if (!started) {
    started = true
    start.innerHTML = 'Stop'
    evolve()
  } else {
    started = false
    start.innerHTML = 'Start'
    clearTimeout(timer)
  }
}

let reset = () => {
  location.reload()
}

start.addEventListener('click', startStop)
reworld.addEventListener('click', reset)

window.onload = () => {
  createWorld()
  createGenArrays()
  initGenArrays()
}