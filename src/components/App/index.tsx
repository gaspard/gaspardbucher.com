import { Component } from '../../Component'
import Lightbox from '../Lightbox'
import CommitDialog from '../CommitDialog'
import PublishButton from '../PublishButton'
import EditDialog from '../EditDialog'

// Custom components for this website
import Things from '../Things'

import './style.scss'

export default Component
( {}
, () =>
  <div class='App'>
    <Things key='Things'/>
    <Lightbox key='Lightbox'/>
    <CommitDialog key='CommitDialog'/>
    <EditDialog key='EditDialog'/>
    <PublishButton key='PublishButton'/>
  </div>
)
