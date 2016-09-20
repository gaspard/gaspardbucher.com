// This action loads the state from a "state.json" file grabbed
// from the server.
// Expects no input.
export default
( { state }
) => {
  const draft = state.get ( 'Sdata.draft' )
  const type = draft.type
  const id = draft.id
  const model = state.get ( `data.model.${ type }` )
  const item = {}

  model.forEach
  ( fld => {
      // could validate/transform data here
      const name = fld.name
      item [ fld.name ] = draft [ name ]
    }
  )
  state.set ( `data.${ type }.${ id }`, item )
}
