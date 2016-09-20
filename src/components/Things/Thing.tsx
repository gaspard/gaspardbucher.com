import { Component } from '../../Component'

export default Component
( {}
, { edit: 'data.editItemClicked' }
, ( { thing, edit } ) => {
  
    const editThing = () => {
      edit ( { id: thing.id, type: thing.type } )
    }

    return <div class='Thing' onClick={ editThing }>
      <div class='name'>{ thing.name }</div>
    </div>
  }
)
