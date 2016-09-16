const Octokat = require ( 'octokat' )
const TOKEN = process.argv [ 3 ]
const octo = new Octokat
( { token: TOKEN } )

const cb = ( err, val ) => console.log ( val )

octo.repos ( 'gaspard', 'gaspardbucher.com' ).fetch ( cb )
