import { copy, set } from 'cerebral/operators'
import loadItemDraft from '../actions/loadItemDraft'

// Expects input to hold:
//   * input.id : existing or new id for the element to edit
//   * input.type : model type (must exist in data.model)
export default
[ copy ( 'input:id', 'state:Sdata.editId' )
, copy ( 'input:type', 'state:Sdata.editType' )
, loadItemDraft
, set ( 'state:Sdata.showEditDialog', true )
]
