import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("space-ship", "sprites/space-ship.png")
loadSprite("wall", "sprites/wall.png")
loadSprite("space-invader", "sprites/space-invader.png")


//add a character to screen
const player = add([
  // list of components
  sprite("space-ship"),
  pos(width() / 2, height() / 2),
  area(),
  origin("center")
])

const Move_Speed = 200

keyDown("left", () => {
  player.move(-Move_Speed, 0)
})

keyDown("right", () => {
  player.move(Move_Speed, 0)
})

layer(["obj", "ui",], "obj")

const score = add([
  text("0"),
  pos(50, 50),
  layer("ui"),
  {
    value: 0
  }
])

const TIME_LEFT = 14

const timer = add([
  text("0"),
  pos(90, 50),
  layer("ui"),
  {
    time: TIME_LEFT
  }
])

timer.action(() => {
  timer.time -= dt()
  timer.text = timer.time.toFixed(2)
  if (timer.time <= 0) {
    go("lose", score.value)
  }
})

addLevel([
  "!@@@@@@@@@@@@@@@  &",
  "!@@@@@@@@@@@@@@@  &",
  "!@@@@@@@@@@@@@@@  &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",
  "!                 &",


], {
  width: 30,
  height: 22,
  "@": () => [
    sprite("space-invader")
  ],
  "!": () => [
    sprite("wall", "left-wall")
  ],
  "&": () => [
    sprite("wall", "right-wall")
  ],
})
// add a kaboom on mouse click
onClick(() => {
  addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)