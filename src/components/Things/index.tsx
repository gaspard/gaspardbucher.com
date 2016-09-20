import { Component } from '../../Component'
import thingsList from './thingsList'
import Thing from './Thing'
import AddThing from './AddThing'

import './style.scss'

export default Component
( { things: thingsList ()
  }
, ( { things } ) =>
    <div class='Things'>
      { things.map ( thing => <Thing thing={ thing } key={ thing.id } /> ) }
      <AddThing/>
    </div>
)
