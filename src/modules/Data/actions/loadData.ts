// This action loads the state from input.data and input.sha
// from the server.
const loadData =
( { input, state }
) => {
  state.set ( 'data', input.data )
  state.set ( 'Sdata.sha', input.sha )
}

export default loadData
