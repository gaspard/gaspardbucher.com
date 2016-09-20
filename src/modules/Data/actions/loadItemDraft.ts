// This action loads the item to edit in the draft storage.
// Expects no Sdata.editType and Sdata.editId.
export default
( { state }
) => {
  const type = state.get ( 'Sdata.editType' )
  const id = state.get ( 'Sdata.editId' )
  const item = state.get ( `data.${type}.${id}` )

  state.set ( 'Sdata.draft', item )
}
