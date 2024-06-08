import React from 'react'
import { Post } from './Post'

describe('<Post />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Post />)
  })
})
