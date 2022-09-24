import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("space-ship", "sprites/space-ship.png")
loadSprite("wall", "sprites/wall.png")
loadSprite("space-invader", "sprites/space-invader.png")


//add a character to screen
add([
  // list of components
  sprite("space-ship"),
  pos(width()/2, height()/2),
  area(),
])

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