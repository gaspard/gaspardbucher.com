import * as Octokat from 'octokat'
import settings from '../settings'

declare var Buffer: any
const base64encode = data =>
  new Buffer ( JSON.stringify ( data, null, 2 ), 'binary' )
  .toString ( 'base64' )

// This action loads the state from a "state.json" file grabbed
// from the server.
// It expects:
// 'data' to hold all the data that we want to save.
// 'Sdata.token' to hold the auth token.
// 'Sdata.message' to hold the commit message.
// 'Sdata.sha' to hold fetched data sha.
const prepareData =
( { state, output }
) => {
  // get all data in 'data'
  const data = base64encode ( state.get ( 'data' ) )
  const token = state.get ( 'Sdata.token' )
  const message = state.get ( 'Sdata.message' )
  const sha = state.get ( 'Sdata.sha' )
  output ( { data, token, message, sha } )
}

export default prepareData
