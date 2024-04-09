import React from 'react'
import { Add } from './Add'

describe('<Add />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Add />)
  })
})
