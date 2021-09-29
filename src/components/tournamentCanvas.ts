import * as d3 from 'd3'

export class TournamentCanvas {
  constructor (targetId: string) {
    this._targetId = targetId
  }

  private readonly _targetId: string

  initialize () {
    this.prepareCanvas()
  }

  private prepareCanvas () {
  }
}
