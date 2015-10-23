export default class Building {
  constructor() {
    this.level = 1
    this.bid = guid()
    this.name = "Building ..."
  }
  upgrade(game) {
    if(game.spend(this.nextLevelCost())) {
      this.level++
    }
  }
  step() {

  }
}
