import { set } from 'cerebral/operators'
import saveItemField from '../actions/saveItemField'

// Expects input to hold:
//   * input.name : name of the field
//   * input.value : value of the field
export default
[ saveItemField
]
