import { Computed } from 'cerebral'

export default Computed
( { things: 'data.thing'
  }
, ( props ) => {
    const things = props.things || {}
    // sort by date
    const list = Object.keys ( things )
    .map
    ( id =>
        Object.assign
        ( { id, type: 'thing' }
        , things [ id ]
        )
    )
    .sort
    ( ( a, b ) =>
        a.date > b.date ? 1 : -1
    )
    console.log ( list )

    return list
  }
)
