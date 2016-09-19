
export default ( fld, item ) => {
  const name = fld.name
  return <input type='text' name={ name } value={ item [ name ] } />
}
