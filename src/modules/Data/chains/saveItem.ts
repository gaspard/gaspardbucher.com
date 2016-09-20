import { set } from 'cerebral/operators'
import saveItem from '../actions/saveItem'

// Expects input to hold:
//   * input.id : existing or new id for the element to save
//   * input.type : model type (must exist in data.model)
//   * state.Sdata.draft : item content (fields should match model definition)
export default
[ saveItem
, set ( 'state:Sdata.showEditDialog', false )
]
