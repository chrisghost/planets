import Mine from 'mine'

export default class Planet {
  constructor(size) {
    this.size = size

    this.buildings = []
  }

  build(what) {
    switch(what) {
      case "mine":
        if(this.buildings.length < this.size) {
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
}
