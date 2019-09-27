import React from 'react'
import { storiesOf } from '@storybook/react'

import { Container, Row, Column, Unit } from '.'

storiesOf('Layouts', module)
  .add('Container', () => (
    <Container>this is container</Container>
  ))
  .add('Row', () => (
    <Container>
      <Row>
        <Unit>aaa</Unit>
        <Unit stretchRight>bbb</Unit>
        <Unit>ccc</Unit>
      </Row>
    </Container>
  ))
  .add('Column', () => (
    <Container>
      <Column>
        <Unit>aaa</Unit>
        <Unit stretchBottom>bbb</Unit>
        <Unit>ccc</Unit>
      </Column>
    </Container>
  ))
