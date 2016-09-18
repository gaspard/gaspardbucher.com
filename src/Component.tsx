import Inferno from 'inferno'
import { connect } from 'cerebral-view-inferno'
import { render as infernoRender } from 'inferno-dom'
import { Container } from 'cerebral-view-inferno'
import * as createElement from 'inferno-create-element'

connect.createElement = createElement

export const Component = connect
export const render =
( view
, controller
, options
) => {
  infernoRender
  ( <Container controller={ controller }>
      { view }
    </Container>
  , options
  )
}
