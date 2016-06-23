import React from 'react'
import ReactDOM from 'react-dom'

const mountPoint = document.createElement('div')

document.body.appendChild(mountPoint)

ReactDOM.render(
  <div>Test</div>,
  mountPoint
)
