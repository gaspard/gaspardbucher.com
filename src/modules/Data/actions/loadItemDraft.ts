// This action loads the item to edit in the draft storage.
// Expects input:
// * id
// * type
export default
( { state, input }
) => {
  const type = input.type
  const id = input.id

  const item = state.get ( `data.${type}.${id}` )

  state.set ( 'Sdata.draft', item )
  state.set ( 'Sdata.draft.type', type )
  state.set ( 'Sdata.draft.id', id )
}
