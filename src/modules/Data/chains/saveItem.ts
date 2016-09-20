import { set } from 'cerebral/operators'
import saveItem from '../actions/saveItem'

// Expects
//   * state.Sdata.draft : item content (fields should match model definition)
export default
[ saveItem
, set ( 'state:Sdata.showEditDialog', false )
]
