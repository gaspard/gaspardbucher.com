import { Computed } from 'cerebral'

export default Computed
( { type: 'Sdata.editType'
  , model: 'data.model'
  }
, ( { type, model } ) => {
    if ( !type || !model ) {
      return {}
    }
    return model [ type ] || {}
  }
)
