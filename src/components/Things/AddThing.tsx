import { Component } from '../../Component'

import makeId from '../../makeId'

export default Component
( {}
, { edit: 'data.editItemClicked' }
, ( { edit } ) => {
    const addThing = () => {
      const id = makeId ()
      edit ( { id, type: 'thing' } )
    }
    return <div class='Thing add' onClick={ addThing }>
        <div class='name'>+</div>
      </div>
  }
)
