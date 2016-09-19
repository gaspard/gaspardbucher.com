import * as Octokat from 'octokat'
import settings from '../settings'

declare var Buffer: any

const base64decode = data =>
  JSON.parse ( new Buffer ( data, 'base64' ).toString () )

// This action loads the state from a "state.json" file grabbed
// from the server.
const fetchData =
( { output }
) => {
  const octo = new Octokat ()
  const repo = octo.repos ( settings.user, settings.repo )
  const file = repo.contents ( settings.dataPath )

  file.fetch ()
  .then
  ( info => {
      const sha = info.sha
      const data = base64decode ( info.content )
      output.success ( { data, sha } )
    }
  )
  .catch
  ( err => {
      output.error ( err )
    }
  )
}

fetchData [ 'async' ] = true

export default fetchData
