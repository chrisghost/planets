import Planet from 'planet'

export default class Game {
  constructor(name) {
    this.gold = 10
    var pl = new Planet(3)
    pl.build("mine")
    this.planets = [pl]

    this.draw()
  }

  nextTurn() {
    console.log("STEP", this)
    var c = this.planets.map(p => p.step())

    this.gatherResources(c)

    this.draw()
  }
  gatherResources(gains) {
    flatten(gains).map( e => {
      if(e.gold) this.gold += e.gold
    })

    console.log(this)

  }

  spend(x) {
    if (this.gold < x ) {
      console.error("Nat enouf monèèè!")
      return false
    }

    this.gold -= x
    return true
  }
  draw() {
    console.log("Drawing", this)
    var main = Mustache.render(document.getElementById("main-tpl").innerHTML, this)
    var planets = this.planets.map( p => p.draw()).join("")
    document.getElementById("game").innerHTML = main + planets

    //setup listeners
    var buts = document.querySelectorAll("button.action-button")
    for (var i = 0; i < buts.length; i++ ) {
      buts[i].onclick = ev => {
        console.log(ev.target.dataset)
        var dat = JSON.parse(ev.target.dataset.action)
        console.log(dat)


        var p = this.planets.find( p => p.id == dat.pid)
        console.log(p)

        switch(dat.action) {
          case "upgrade" :
            console.log("Search for building : ", dat.bid)
            var b = p.buildings.find(b => b.bid == dat.bid)
            console.log(b)

            b.upgrade(this)

          case "build" :
            p.build(this, dat.building)
        }

        this.draw()
      }
    }

    document.getElementById('next-turn').onclick = e => this.nextTurn()
  }
}
