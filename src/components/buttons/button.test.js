import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

it('should render Button component', () => {
  expect(shallow(<Button>Primary</Button>).debug()).toMatchSnapshot()
})
