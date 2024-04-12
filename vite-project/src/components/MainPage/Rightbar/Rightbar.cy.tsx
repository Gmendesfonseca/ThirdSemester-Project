import React from 'react'
import { Rightbar } from './Rightbar'

describe('<Rightbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Rightbar />)
  })
})
