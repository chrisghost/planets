import Mine from 'mine'

export default class Planet {
  constructor(size) {
    this.id = guid()
    this.size = size

    this.buildings = []
  }

  build(game, what) {
    switch(what) {
      case "mine":
        if(this.buildings.length < this.size) {
          if(game.spend(Mine.firstLevelPrice))
            this.buildings.push(new Mine())
        } else {
          console.error("Planet is full")
        }
        return
    }
  }

  step() {
    return this.buildings.map( b => b.step())
  }

  draw() {
    this.firstLevelPrice = {mine : Mine.firstLevelPrice}
    return Mustache.render(document.getElementById("planet-tpl").innerHTML, this)
  }
}
