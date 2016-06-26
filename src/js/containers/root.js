import React from 'react'
import sample from 'lodash/sample'
import random from 'lodash/random'

import Note from '../components/note'

const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'H']

export default class Root extends React.Component {
  constructor (params) {
    super(params)

    this.state = {
      note: sample(NOTES),
      delay: 5,
      deep: random(1, 2)
    }

    this.changeNote = this.changeNote.bind(this)
  }

  changeNote () {
    this.setState({
      note: sample(NOTES),
      deep: random(1, 2)
    })
  }

  componentDidMount () {
    this.timer = setInterval(this.changeNote, this.state.delay * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Note note={this.state.note} deep={this.state.deep} />
    )
  }
}
