import { Component } from '../../Component'

export default ( fld, item, change ) => {
  const name = fld.name
  const onChange = ( e ) => {
    const value = e.target.value
    change ( { name, value } )
  }

  return <div class='field'>
      <label for={ name }>{ name }</label>
      <input type='text' name={ name } value={ item [ name ] || '' } onChange={ onChange } />
    </div>
}
