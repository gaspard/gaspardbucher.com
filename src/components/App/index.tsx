import { Component } from '../../Component'
import Lightbox from '../Lightbox'
import CommitDialog from '../CommitDialog'
import PublishButton from '../PublishButton'

import './style.scss'

export default Component
( {}
, () =>
  <div class='App'>
    <Lightbox key='Lightbox'/>
    <CommitDialog key='CommitDialog'/>
    <PublishButton key='PublishButton'/>
  </div>
)
