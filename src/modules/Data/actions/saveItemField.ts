// This action loads the state from a "state.json" file grabbed
// from the server.
// Expects input to hold:
//   * input.name : name of field
//   * input.value : new value for field
export default
( { input, state }
) => {
  state.set ( `Sdata.draft.${ input.name }`, input.value )
}
