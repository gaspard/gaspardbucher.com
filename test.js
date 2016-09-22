/*
var Promise = require ( 'bluebird' )
Promise.onPossiblyUnhandledRejection
( (error) => {
    throw error;
  }
)
*/

const Octokat = require ( 'octokat' )

const TOKEN = process.argv [ 2 ]
console.log ( TOKEN )

const octo = new Octokat ( { token: TOKEN } )

const repo = octo.repos ( 'gaspard', 'gaspardbucher.com' )

const file =  repo.contents ( 'data/state.json' )

const cb = ( val ) => console.log ( val )

const base64encode = data =>
  new Buffer ( JSON.stringify ( data, null, 2 ), 'binary' )
  .toString ( 'base64' )

const base64decode = data =>
  JSON.parse ( new Buffer ( data, 'base64' ).toString () )

/*
file.fetch ()
.then
( info => {
    const FILE_SHA = info.sha
    // Write file
    const data = { host: 'gaspardbucher.com', description: 'Official website for Swiss artist Gaspard Bucher' }
    const config =
    { message: 'Using octokat to update file.'
    , content: base64encode ( data )
    , sha: FILE_SHA
    }

    file.add ( config )
    .catch ( err => console.log )

    throw new Error ( 'hop' )
  }
)
*/

// UPLOAD AN IMAGE
const fs  = require ( 'fs' )
const btoa =
( data => {
    const buf = new Buffer ( data )
    return buf.toString ( 'base64' )
  }
)

const img = fs.readFileSync ( './test.jpg' )
const config =
{ message: 'Using octokat to update file.'
, content: btoa ( img )
}

const image =  repo.contents ( 'image/test.jpg' )

image.add ( config )
.catch ( err => console.log )

