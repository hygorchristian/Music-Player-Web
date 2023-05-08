import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ioc from './lib/ioc'

dotenv.config()

ioc.setup()

ReactDOM.render(<App />, document.getElementById('root'))
