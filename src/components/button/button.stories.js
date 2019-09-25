import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultThemeObject } from '../../themes'
import { storiesOf } from '@storybook/react'

import Button from './button'

const themeProviderDecorator = storyFn => <ThemeProvider theme={defaultThemeObject}>{storyFn()}</ThemeProvider>

storiesOf('Buttons', module)
  .addDecorator(themeProviderDecorator)
  .add('default', () => <Button>haha</Button>)
