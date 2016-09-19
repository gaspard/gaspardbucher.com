import * as Octokat from 'octokat'
import settings from '../settings'


// This action saves the data to the server.
// It expects:
// input.token to hold the auth token and
// input.message' to hold the commit message.
// input.sha' to hold fetched data sha.
// input.data to hold all the data to be saved as a string.
// It outputs the new 'sha' on success.
const writeData =
( { input, output }
) => {
  const octo = new Octokat ( { token: input.token } )
  const repo = octo.repos ( settings.user, settings.repo )
  const file = repo.contents ( settings.dataPath )

  const config =
  { message: input.message
  , content: input.data
  , sha: input.sha
  }

  file.add ( config )
  .then
  ( info => {
      const sha = info.sha
      output.success ( { sha } )
    }
  )
  .catch
  ( err => {
      output.error ( err )
    }
  )
}

writeData [ 'async' ] = true

export default writeData
