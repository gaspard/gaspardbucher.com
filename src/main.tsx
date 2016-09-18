import { Component, render } from './Component'

import controller from './controller'
import App from './components/App'

render
( <App />
, controller
, document.querySelector ( '#app' )
)
