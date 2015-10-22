import Planet from 'planet'

export default class Game {
  constructor(name) {
    this.gold = 0
    var pl = new Planet(3)
    pl.build("mine")
    this.planets = [pl]

    this.launchTimer()
  }

  step() {
    console.log("STEP", this)
    var c = this.planets.map(p => p.step())

    this.gatherResources(c)
  }
  gatherResources(gains) {
    flatten(gains).map( e => {
      if(e.gold) this.gold += e.gold
    })

    console.log(this)

  }
  launchTimer() {
    //this.step()
    setInterval(() => this.step(), 1000)
  }
}
