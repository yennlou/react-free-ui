import { addDecorator, configure } from '@storybook/react';
import React from 'react'

import ResetStyle from '../src/style-helpers/reset'
import StorybookStyle from './style'
import { ThemeProvider } from 'styled-components'
import { defaultThemeObj, darkThemeObj } from '../src/themes'


const req = require.context('../src', true, /\.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const themeWrapper = storyFn => (
  <React.Fragment>
    <ResetStyle />
    <StorybookStyle />
    <ThemeProvider theme={defaultThemeObj}>{storyFn()}</ThemeProvider>
  </React.Fragment>
) 

addDecorator(themeWrapper)
configure(loadStories, module)