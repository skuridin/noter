import React from 'react'
import repeat from 'lodash/repeat'

const Note = ({ note, deep }) => (
  <div className='note'>{note + repeat('’', deep)}</div>
)

export default Note
