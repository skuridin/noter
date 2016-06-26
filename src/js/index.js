import React from 'react'
import ReactDOM from 'react-dom'

import Root from './containers/root'

const mountPoint = document.createElement('div')

mountPoint.className = 'root'

document.body.appendChild(mountPoint)

ReactDOM.render(<Root />, mountPoint)
