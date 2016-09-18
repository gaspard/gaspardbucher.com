import { Component } from '../../Component'

import './style.scss'

export default Component
( { newItemTitle: 'newItemTitle'
  , items: 'items'
  }
, ( props ) => {

    const onFormSubmit = event => {
      event.preventDefault()
      props.signals.newItemTitleSubmitted()
    }

    const onInputChange = event => {
      props.signals.newItemTitleChanged({
        title: event.target.value
      })
    }

    return <div>HELLO
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={props.newItemTitle}
            onChange={onInputChange}
          />
        </form>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
  }
)
