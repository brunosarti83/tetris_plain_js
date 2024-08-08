import './style.css'

const nextPieceCanvas = document.querySelector('#next-piece-canvas')
const nextPieceCtx = nextPieceCanvas.getContext('2d')

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const blockSize = 20
const columns = 14
const rows = 30

const DIFFICULTY = 2
let points = 0
const score = document.querySelector('#score-value')
score.textContent = points

canvas.width = columns * blockSize
canvas.height = rows * blockSize

nextPieceCanvas.width = 8 * blockSize
nextPieceCanvas.height = 8 * blockSize

ctx.scale(blockSize, blockSize)
nextPieceCtx.scale(blockSize, blockSize)

const gameOverImage = document.querySelector('#gameOver')

const colors = {
  1: 'yellow',
  2: 'blue',
  3: 'red',
  4: 'green',
  5: 'purple',
  6: 'aqua',
  7: 'orange',
  8: 'pink'
}

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const shapes = [
  [
    [
      [2, 2],
      [2, 2]
    ]
  ],
  [
    [
      [3],
      [3],
      [3],
      [3]
    ],
    [
      [3, 3, 3, 3]
    ]
  ],
  [
    [
      [4, 4, 0],
      [0, 4, 4]
    ],
    [
      [0, 4],
      [4, 4],
      [4, 0]
    ]
  ],
  [
    [
      [5, 0],
      [5, 0],
      [5, 5]
    ],
    [
      [5, 5, 5],
      [5, 0, 0]
    ],
    [
      [5, 5],
      [0, 5],
      [0, 5]
    ],
    [
      [0, 0, 5],
      [5, 5, 5]
    ]
  ],
  [
    [
      [6, 6, 6],
      [0, 6, 0]
    ],
    [
      [0, 6],
      [6, 6],
      [0, 6]
    ],
    [
      [0, 6, 0],
      [6, 6, 6]
    ],
    [
      [6, 0],
      [6, 6],
      [6, 0]
    ]
  ],
  [
    [
      [0, 7],
      [0, 7],
      [7, 7]
    ],
    [
      [7, 0, 0],
      [7, 7, 7]
    ],
    [
      [7, 7],
      [7, 0],
      [7, 0]
    ],
    [
      [7, 7, 7],
      [0, 0, 7]
    ]
  ],
  [
    [
      [0, 8, 8],
      [8, 8, 0]
    ],
    [
      [8, 0],
      [8, 8],
      [0, 8]
    ]
  ]
]

const nextPiece = {
  position: { x: 0, y: 0 },
  shapes: shapes[Math.floor(Math.random() * shapes.length)],
  index: 0,
  shape: undefined
}
nextPiece.shape = nextPiece.shapes[nextPiece.index]
nextPiece.position = { x: 4 - nextPiece.shape[0].length / 2, y: 4 - nextPiece.shape.length / 2 }

const piece = {
  position: { x: 0, y: 0 },
  shapes: shapes[Math.floor(Math.random() * shapes.length)],
  index: 0,
  shape: undefined
}
piece.shape = piece.shapes[piece.index]

let lowerEvery = 1100 - DIFFICULTY * 100
let lastTime = 0

let game = false

if (!game) {
  const shade = document.createElement('div')
  shade.id = 'shade'

  const startButton = document.createElement('button')
  startButton.id = 'start-button'
  startButton.className = 'button'
  startButton.textContent = 'Start'
  // Add an event listener for the click event
  startButton.addEventListener('click', () => {
    shade.style.display = 'none'
    game = true
  })
  // Append the button to the body of the document
  shade.appendChild(startButton)
  document.body.appendChild(shade)
}

// Game Loop
function update (timestamp) {
  draw()
  gameOver()
  solidifyOnStack()
  removeRow()

  const deltaTime = timestamp - lastTime
  if (deltaTime > lowerEvery) {
    lastTime = timestamp
    piece.position.y += 1
    if (checkCollision()) piece.position.y -= 1
  }

  window.requestAnimationFrame(update)
}

// Function for drawing on each update
function draw () {
  // draw an empty board | clear the canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // draw the next piece space
  nextPieceCtx.fillStyle = 'black'
  nextPieceCtx.fillRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height)

  if (game) {
    // draw the current board
    board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = colors[value]
          ctx.strokeStyle = 'darkgray'
          ctx.lineWidth = 0.1
          ctx.fillRect(x, y, 1, 1)
          ctx.strokeRect(x, y, 1, 1)
        }
      })
    })

    // draw the current piece
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = colors[value]
          ctx.strokeStyle = 'darkgray'
          ctx.lineWidth = 0.1
          ctx.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
          ctx.strokeRect(x + piece.position.x, y + piece.position.y, 1, 1)
        }
      })
    })

    // draw the next piece
    nextPiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          nextPieceCtx.fillStyle = colors[value]
          nextPieceCtx.strokeStyle = 'darkgray'
          nextPieceCtx.lineWidth = 0.1
          nextPieceCtx.fillRect(x + nextPiece.position.x, y + nextPiece.position.y, 1, 1)
          nextPieceCtx.strokeRect(x + nextPiece.position.x, y + nextPiece.position.y, 1, 1)
        }
      })
    })
  } else {
    ctx.drawImage(
      gameOverImage,
      0,
      0,
      950,
      380,
      canvas.width / 20 / 2 - 950 / 20 / 4 / 2,
      canvas.height / 20 / 2 - 380 / 20 / 4 / 2,
      950 / 20 / 4,
      380 / 20 / 4
    )
  }
}

// Handle keydown events to move piece around
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    piece.position.x -= 1
    if (checkCollision()) piece.position.x += 1
  }
  if (event.key === 'ArrowRight') {
    piece.position.x += 1
    if (checkCollision()) piece.position.x -= 1
  }
  if (event.key === 'ArrowDown') {
    piece.position.y += 1
    if (checkCollision()) piece.position.y -= 1
  }
  if (event.key === 'ArrowUp') {
    rotate()
  }
})

function checkCollision () {
  return piece.shape.some((row, y) => {
    return row.some((value, x) => (
      value !== 0 && // if not empty space on piece
      (!board[y + piece.position.y] || // and either is end of board
      board[y + piece.position.y][x + piece.position.x] !== 0)) // or not empty space on board
    )
  })
}

function rotate () {
  piece.index = piece.shapes.length > piece.index + 1 ? piece.index + 1 : 0
  piece.shape = piece.shapes[piece.index]
  while (checkCollision()) {
    piece.position.x -= 1
  }
}

function solidifyOnStack () {
  if (piece.shape.some((row, y) => {
    return row.some((value, x) => (
      value !== 0 && // if not empty space on piece
      (!board[y + piece.position.y + 1] || // and either is end of board
      board[y + piece.position.y + 1][x + piece.position.x] !== 0)) // or not empty space on board
    )
  })) {
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          board[y + piece.position.y][x + piece.position.x] = value
        }
      })
    })
    // get piece shape from nextPiece
    piece.position = { x: 0, y: 0 }
    piece.shapes = nextPiece.shapes
    piece.index = 0
    piece.shape = nextPiece.shape

    // get next piece shape
    nextPiece.shapes = shapes[Math.floor(Math.random() * shapes.length)]
    nextPiece.shape = nextPiece.shapes[0]
    nextPiece.position = { x: 4 - nextPiece.shape[0].length / 2, y: 4 - nextPiece.shape.length / 2 }
  }
}

function removeRow () {
  board.forEach((row, y) => {
    if (row.every(value => value > 0)) {
      board.splice(y, 1)
      board.unshift(new Array(columns).fill(0))
      // add points
      points += 50
      score.textContent = points
      // increase speed
      if (lowerEvery > 200) lowerEvery -= DIFFICULTY * 50
    }
  })
}

function gameOver () {
  if (piece.position.x === 0 &&
    checkCollision()
  ) {
    game = false
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }
}

window.requestAnimationFrame(update)
