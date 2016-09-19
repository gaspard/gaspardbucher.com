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
, ( { item, model, id, type, showDialog, signals } ) => {
    if ( !showDialog ) {
      return ''
    }
    return <div class='EditDialog'>
        <div class='type'>{ type }</div>
        <div class='id'>{ id }</div>
        <div class='form'>
          { model.map ( fld => makeInput ( fld, item ) ) }
        </div>
      </div>
  }
)
