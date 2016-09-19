import fetchData from '../actions/fetchData'
import loadData from '../actions/loadData'
import { copy, set } from 'cerebral/operators'

export default
[ set ( 'state:Sdata.error', '' )
, set ( 'state:Sdata.loading', true )
, fetchData
, { success:
    [ loadData
    , set ( 'state:Sdata.loading', false )
    ]
  , error:
    [ copy ( 'input:error', 'state:Sdata.error' )
    , set ( 'state:Sdata.loading', false )
    ]
  }
]
