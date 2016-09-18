import './style.scss'
import { Component } from './Component'
import { ContextType } from '../modules/context.type'
// import { Test } from './Test'

export const App =
Component
( { host: 'host'
  }
, ( { host } ) => {
    return <div>
        <div class='wrap'>{ host }</div>
      </div>
  }
)
