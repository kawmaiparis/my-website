import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Mobile from './Mobile'
import * as serviceWorker from './serviceWorker'

// min width 1580
// min height 826
const width = window.innerWidth
const height = window.innerHeight
console.log(width, height)

if (width < 1440 || height < 730) {
	ReactDOM.render(<Mobile />, document.getElementById('root'))
} else {
	ReactDOM.render(<App />, document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
