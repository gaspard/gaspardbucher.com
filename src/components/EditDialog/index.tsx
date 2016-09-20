import { Component } from '../../Component'
import editedItemModel from './editedItemModel'
import makeInput from './makeInput'

import './style.scss'

export default Component
( { item: 'Sdata.draft'
  , model: editedItemModel ()
  , showDialog: 'Sdata.showEditDialog'
  }
, { cancelEdit: 'data.cancelEditClicked'
  , validateEdit: 'data.validateEditClicked'
  , itemFieldChanged: 'data.itemFieldChanged'
  }
, ( { item, model, showDialog
    , cancelEdit, validateEdit, itemFieldChanged
    }
  ) => {
    if ( !showDialog ) {
      return <div class='EditDialog' style='display:none'></div>
    }

    const stopEvent = ( e: Event ) => e.stopPropagation ()

    const validate = ( e ) => {
      e.preventDefault ()
      validateEdit ( { id: item.id, type: item.type } )
    }

    return <div class='EditDialog' onClick={ cancelEdit }>
        <div class='dialog' onClick={ stopEvent }>
          <div class='header'>
            <div class='id'>{ item.id }</div>
            <div class='type'>{ item.type }</div>
          </div>

          <form onSubmit={ validate }>
            { model.map ( fld => makeInput ( fld, item, itemFieldChanged ) ) }
            <input type='submit' style='display:none' />
          </form>

          <button class='validate' onClick={ validateEdit }>Validate</button>
          <button class='cancel' onClick={ cancelEdit }>Cancel</button>
        </div>
      </div>
  }
)
