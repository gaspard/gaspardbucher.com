import {Controller} from 'cerebral'
import * as Model from 'cerebral/models/immutable'
import * as Devtools from 'cerebral-module-devtools'

import Data from './modules/Data'

const controller = Controller ( Model ( {} ) )

controller.addModules
( { data: Data
  , devtools: Devtools ()
  }
)

export default controller
