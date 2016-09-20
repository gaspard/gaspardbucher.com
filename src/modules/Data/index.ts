import importData from './chains/importData'
import prepareCommit from './chains/prepareCommit'
import commitData from './chains/commitData'
import editItem from './chains/editItem'
import hideEditDialog from './chains/hideEditDialog'
import saveItem from './chains/saveItem'
import saveItemField from './chains/saveItemField'

const baseState = require ( 'json!../../../data/state.json' )

export default ( module, controller ) => {
  module.addState ( baseState )

  module.addSignals
  ( { mounted: importData
    , publishClicked: prepareCommit
    , commitDialogValidated: commitData
    , editItemClicked: editItem
    , cancelEditClicked: hideEditDialog
    , validateEditClicked: saveItem
    , itemFieldChanged: saveItemField
    }
  )

  controller.on
  ( 'modulesLoaded', () => {
      controller.getSignals ().data.mounted ()
    }
  )
}
