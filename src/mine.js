import Building from 'building'

export default class Mine extends Building {
  constructor() {
    this.level = 1
  }

  step() {
    return { gold: this.level }
  }
}
