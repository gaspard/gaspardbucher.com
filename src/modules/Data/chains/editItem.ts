import { copy, set } from 'cerebral/operators'

// Expects input to hold:
//   * input.id : existing or new id for the element to edit
//   * input.type : model type (must exist in data.model)
export default
[ copy ( 'input:id', 'state:Sdata.editId' )
, copy ( 'input:type', 'state:Sdata.editType' )
, set ( 'state:Sdata.draft', {} )
, set ( 'state:Sdata.showEditDialog', true )
]
