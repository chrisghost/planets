import Building from 'building'

export default class Mine extends Building {
  constructor() {
    super()
    this.name = "Gold Mine"
  }

  step() {
    return { gold: this.currentProduction() }
  }

  currentProduction() {
    return this._nlc(this.level)
  }

  nextLevelCost() {
    return this._nlc(this.level+1)
  }
  _nlc(x) {
   if(x == 1) return 1
   else return x*2 + this._nlc(x-1)
  }
}
Mine.firstLevelPrice = 1
