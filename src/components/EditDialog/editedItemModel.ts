import { Computed } from 'cerebral'

export default Computed
( { type: 'Sdata.editType'
  , model: 'data.model'
  }
, ( { type, model } ) => {
    return model [ type ] || {}
  }
)
