import { Component } from '../../Component'
import editedItem from './editedItem'
import editedItemModel from './editedItemModel'
import makeInput from './makeInput'

import './style.scss'

export default Component
( { item: editedItem ()
  , model: editedItemModel ()
  , id: 'Sdata.editId'
  , type: 'Sdata.editType'
  , showDialog: 'Sdata.showEditDialog'
  }
, { cancelEdit: 'data.cancelEditClicked'
  , validateEdit: 'data.validateEditClicked'
  , itemFieldChanged: 'data.itemFieldChanged'
  }
, ( { item, model, id, type, showDialog
    , cancelEdit, validateEdit, itemFieldChanged
    }
  ) => {
    if ( !showDialog ) {
      return <div class='EditDialog' style='display:none'></div>
    }

    const stopEvent = ( e: Event ) => e.stopPropagation ()

    const validate = ( e ) => {
      e.preventDefault ()
      validateEdit ( { id, type } )
    }

    return <div class='EditDialog' onClick={ cancelEdit }>
        <div class='dialog' onClick={ stopEvent }>
          <div class='header'>
            <div class='id'>{ id }</div>
            <div class='type'>{ type }</div>
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
