import importData from './chains/importData'
import prepareCommit from './chains/prepareCommit'
import commitData from './chains/commitData'

export default ( module, controller ) => {
  module.addState ( {} )

  module.addSignals
  ( { mounted: importData
    , publishClicked: prepareCommit
    , commitDialogValidated: commitData
    }
  )

  controller.on
  ( 'modulesLoaded', () => {
      controller.getSignals ().data.mounted ()
    }
  )
}
