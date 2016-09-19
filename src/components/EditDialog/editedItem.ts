import { Computed } from 'cerebral'

export default Computed
( { id: 'Sdata.editId'
  , type: 'Sdata.editType'
  , data: 'data'
  }
, ( { id, type, data } ) => {
    const items = data [ type ]
    if ( !items ) {
      // First item in the collection
      return {}
    }
    else {
      return items [ id ] || {}
    }
  }
)
