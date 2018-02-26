const cryptogs = require("./cryptogs.js")

let animals = [
  "buffalo.png",
  "bull.png",
  "elephant.png",
  "fish.png",
  "hippo.png",
  "lobster.png",
  "mountaingoat.png",
  "octopus.png",
  "penguin.png",
  "rhino.png",
  "walrus.png",
  "zebra.png"
]

let space = [
  "space1.png",
  "space2.png",
  "space3.png",
  "space4.png",
  "space5.png",
  "space6.png",
  "space7.png",
  "space8.png",
  "space1.png",
  "space2.png",
  "space3.png",
  "space4.png",
  "space5.png",
  "space6.png",
  "space7.png",
  "space8.png",
]

let retro = [
  "retro1.png",
  "retro2.png",
  "retro3.png",
  "retro4.png",
  "retro5.png",
  "retro6.png",
  "retro7.png",
  "retro1.png",
  "retro2.png",
  "retro3.png",
  "retro4.png",
  "retro5.png",
  "retro6.png",
  "retro7.png",
]


function grabRandomTen(arr){
  let newArr = []
  for(var i = 0;i<10;i++){
    let piece = arr.splice(Math.floor(Math.random()*arr.length), 1)
    newArr.push(piece[0]);
  }
  return newArr;
}

cryptogs.mintPack(0,grabRandomTen(retro),0.005)

cryptogs.mintPack(0,grabRandomTen(space),0.005)

cryptogs.mintPack(0,grabRandomTen(animals),0.01)

cryptogs.mintPack(0,[
  "ethereumlogo.png",
  "ethereumlogo.png",
  "ethereumlogo.png",
  "ethereumlogo.png",
  "ethereumlogo.png",
  "ethereumlogo.png",
  "ethereumlogo.png",
  "ethereumlogo.png",
  "unicorn.png",
  "dragon.png",
],0.025)