import prepareData from '../actions/prepareData'
import writeData from '../actions/writeData'
import { copy, set } from 'cerebral/operators'

export default
[ set ( 'state:Sdata.error', '' )
, set ( 'state:Sdata.showCommitDialog', false )
, prepareData
, writeData
, { success:
    []
  , error:
    [ copy ( 'input:error', 'state:Sdata.error' )
    ]
  }
]
